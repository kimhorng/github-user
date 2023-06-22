import React, { useEffect, useState } from "react";
import UsersInfo from "./UsersInfo";
import Loading from "./Loading";
import { useFetch } from "../api/useFetch";
function User() {
  const [search, setSearch] = useState("");
  const { users, isLoading } = useFetch("https://api.github.com/users");

  //   search function
  const onchange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" my-12 mt-32 mx-auto ">
      {/* search box  */}
      <div className="mb-5 pt-10 w-11/12 mx-auto fixed top-[104px] z-30 right-0 left-0  bg-white">
        <input
          placeholder="Search User Name Or Company Name..."
          className=" p-3 border-2 icon-rtl w-full"
          onChange={onchange}
        />
      </div>

      {/* Show the loading component while the data is fetching */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center pt-24">
          {/* get only 25 users `slice(0, 25)` */}
          <UsersInfo
            login={users.slice(0, 25).map((user) => user.login)}
            search={search}
            data-testid="fetch-username"
          />
        </div>
      )}
    </div>
  );
}

export default User;
