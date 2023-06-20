import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import UsersInfo from "./components/UsersInfo";
import Navbar from "./components/Navbar";

function App() {
  type User = {
    login: string;
  };
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      // const response = await fetch("https://api.github.com/users");
      const response = await fetch("https://api.github.com/users", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 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",
        },
      });
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }
  };

  const onchange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="lg:container my-12 mx-auto px-4 md:px-12">
      <Navbar />
      <div className=" my-12 mx-auto ">
        {/* search box  */}
        <div className="mb-5">
          <input
            placeholder="Search User Name Or Company Name..."
            className="w-full p-3 border-2 icon-rtl"
            onChange={onchange}
          />
        </div>
        {/* End of search box */}

        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap justify-center">
            {/* get only 25 users `slice(0, 25)` */}
            <UsersInfo
              login={users.slice(0, 25).map((user) => user.login)}
              search={search}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
