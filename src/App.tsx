import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import UserCardContainer from "./components/UserCardContainer";
import UsersInfo from "./components/UsersInfo";
import Navbar from "./components/Navbar";

function App() {
  type User = {
    login: string;
    avatar_url: string;
    id: number;
    followers_url: string;
    following_url: string;
    organizations_url: string;
    url: string;
  };
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.github.com/users");
      const FinalData = await response.json();
      setUsers(FinalData);
      setLoading(false);
    } catch (e) {
      setLoading(true);
    }
  };

  const onchange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  // const filterGitInfo = users.filter((info) => {
  //   return info.login.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="lg:container my-12 mx-auto px-4 md:px-12">
      <Navbar />
      <div className=" my-12 mx-auto ">
        <div className="mb-5">
          <input
            placeholder="Search User Or Company..."
            className="w-full p-3 border-2"
            onChange={onchange}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap justify-center">
            {users.slice(0, 25).map((user) => (
              <UsersInfo key={user.id} pathname={user.login} search={search} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
