import React, { useEffect, useState } from "react";
import UserCardContainer from "./UserCardContainer";
const UsersInfo = ({
  pathname,
  search,
}: {
  pathname: string;
  search: string;
}) => {
  type User = {
    name: string;
    avatar_url: string;
    id: number;
    followers: number;
    following: number;
    company: string;
    url: string;
    login: string;
    public_repos: number;
  };
  const [user, setUser] = useState<User>();
  let EndPoint = "https://api.github.com/users";
  const GetUserInfo = async () => {
    const res = await fetch(EndPoint + "/" + pathname);
    const data = await res.json();
    setUser(data);
  };
  useEffect(() => {
    GetUserInfo();
  }, []);

  // Filter by user name
  const filterName = user?.name
    ? user?.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    : user?.login.toLowerCase().indexOf(search.toLowerCase()) !== -1;

  // Filter by company name
  const filterCompany = user?.company
    ? user?.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
    : "";

  return (
    <div className="flex flex-wrap justify-center">
      {filterName || filterCompany
        ? user && (
            <UserCardContainer
              key={user.id}
              name={user.name}
              avatar={user.avatar_url}
              followers={user.followers}
              following={user.following}
              company={user.company}
              login={user.login}
              repos={user.public_repos}
            />
          )
        : null}
    </div>
  );
};
export default UsersInfo;
