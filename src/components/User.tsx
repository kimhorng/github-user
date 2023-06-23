import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { userStore } from "../api/useFetch";
import Loading from "./Loading";
import UserCards from "./UserCards";

const User = observer(() => {
  const handleFetchPost = () => {
    userStore.fetchPosts();
  };
  useEffect(() => {
    handleFetchPost();
  }, []);

  const [search, setSearch] = useState("");
  const onchange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  const filterGitInfo = userStore.post.filter((info) => {
    return (
      (info.name
        ? info.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : info.login.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (info.company
        ? info.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : "")
    );
  });

  return (
    <div className=" my-12 mt-32 mx-auto ">
      {/* search box */}
      <div className="mb-5 pt-10 w-11/12 mx-auto fixed top-[104px] z-30 right-0 left-0  bg-white">
        <input
          placeholder="Search User Name Or Company Name..."
          className=" p-3 border-2 icon-rtl w-full"
          onChange={onchange}
        />
      </div>
      {/* Show the loading component while the data is fetching */}
      {userStore.loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center pt-24">
          {filterGitInfo.length > 0 ? (
            filterGitInfo.map((user) => (
              <UserCards
                key={user.id}
                name={user.name}
                avatar={user.avatar_url}
                followers={user.followers}
                following={user.following}
                company={user.company}
                login={user.login}
                repos={user.public_repos}
              />
            ))
          ) : (
            <div className="sm:-mt-20 ">
              <img
                src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
                alt=""
                className="mx-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
});
export default User;
