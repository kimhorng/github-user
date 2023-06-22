import UserCards from "./UserCards";
import Loading from "./Loading";
import { useFetch } from "../api/useFetch";
const UsersInfo = ({ login, search }: { login: string[]; search: string }) => {
  const { userInfo, loading } = useFetch("https://api.github.com/users", login);

  const filterGitInfo = userInfo.filter((info) => {
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
    <>
      {!loading ? (
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
                alt="search not found"
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
