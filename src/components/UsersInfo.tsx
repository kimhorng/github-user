import { useEffect, useState } from "react";
import UserCards from "./UserCards";
import Loading from "./Loading";
const UsersInfo = ({ login, search }: { login: string[]; search: string }) => {
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
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const getUsers = async () => {
    let data = [];
    setLoading(true);
    try {
      for (let i = 0; i < login.length; i++) {
        const res = await fetch(`https://api.github.com/users/${login[i]}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        data.push(await res.json());
      }
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };
  // filter function to get only user data that have the name or company match user input
  const filterGitInfo = users.filter((info) => {
    return (
      (info.name
        ? info.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : info.login.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (info.company
        ? info.company.toLowerCase().indexOf(search.toLowerCase()) !== -1
        : "")
    );
  });

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!isLoading ? (
        <div
          className="flex flex-wrap justify-center"
          data-testid="filterGitInfo"
        >
          {filterGitInfo.length >= 1 ? (
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
            <div>
              <img
                src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg"
                alt=""
              />
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UsersInfo;
