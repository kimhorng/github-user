import React, { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import UserCardContainer from "./components/UserCardContainer";

function App() {
  type User = {
    login: string;
    avatar_url: string;
    id: number;
    followers_url: string;
    following_url: string;
    organizations_url: string;
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
  const filterGitInfo = users.filter((info) => {
    return info.login.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" my-12 mx-auto ">
          <div className="mb-5">
            <input
              placeholder="Search User..."
              className="w-full p-3 border-2"
              onChange={onchange}
            />
          </div>
          <div className="flex flex-wrap mx-auto ">
            {filterGitInfo.slice(0, 25).map((user) => (
              <UserCardContainer
                key={user.id}
                name={user.login}
                avatar={user.avatar_url}
                followers_url={user.followers_url}
                following_url={user.following_url}
                company_url={user.organizations_url}
              />
            ))}
          </div>
          {/* <div className="flex flex-wrap mx-auto ">
            {filterGitInfo.map((user) => (
              <div
                key={user.id}
                className="my-1 px-1 w-10/12 mx-auto sm:w-1/2 lg:my-4 lg:px-4 xl:w-1/3  "
              >
                <div className="mx-auto  bg-white shadow-xl rounded-lg text-gray-900 h-full">
                  <div className="rounded-t-lg h-32 overflow-hidden">
                    <img
                      className="object-cover object-top w-full"
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                      alt="Mountain"
                    />
                  </div>
                  <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-32"
                      src={user.avatar_url}
                      alt="Woman looking front"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h2 className="font-semibold">{user.login}</h2>
                    <p className="text-gray-500">Freelance Web Designer</p>
                  </div>
                  <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li className="flex flex-col items-center justify-around">
                      <svg
                        className="w-4 fill-current text-blue-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <div>2k</div>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                      <svg
                        className="w-4 fill-current text-blue-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                      <div>10k</div>
                    </li>
                    <li className="flex flex-col items-center justify-around">
                      <svg
                        className="w-4 fill-current text-blue-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                      </svg>
                      <div>15</div>
                    </li>
                  </ul>
                  <div className="p-4 border-t mx-8 mt-2">
                    <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
              // <div className="sm:w-[300px] md:w-[340px] lg:w-[400px]  p-3 flex-col justify-center items-center">
              //   <div className="mx-auto  bg-white shadow-xl rounded-lg text-gray-900 h-full">
              //     <div className="rounded-t-lg h-32 overflow-hidden">
              //       <img
              //         className="object-cover object-top w-full"
              //         src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              //         alt="Mountain"
              //       />
              //     </div>
              //     <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              //       <img
              //         className="object-cover object-center h-32"
              //         src={user.avatar_url}
              //         alt="Woman looking front"
              //       />
              //     </div>
              //     <div className="text-center mt-2">
              //       <h2 className="font-semibold">{user.login}</h2>
              //       <p className="text-gray-500">Freelance Web Designer</p>
              //     </div>
              //     <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              //       <li className="flex flex-col items-center justify-around">
              //         <svg
              //           className="w-4 fill-current text-blue-900"
              //           xmlns="http://www.w3.org/2000/svg"
              //           viewBox="0 0 20 20"
              //         >
              //           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              //         </svg>
              //         <div>2k</div>
              //       </li>
              //       <li className="flex flex-col items-center justify-between">
              //         <svg
              //           className="w-4 fill-current text-blue-900"
              //           xmlns="http://www.w3.org/2000/svg"
              //           viewBox="0 0 20 20"
              //         >
              //           <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              //         </svg>
              //         <div>10k</div>
              //       </li>
              //       <li className="flex flex-col items-center justify-around">
              //         <svg
              //           className="w-4 fill-current text-blue-900"
              //           xmlns="http://www.w3.org/2000/svg"
              //           viewBox="0 0 20 20"
              //         >
              //           <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              //         </svg>
              //         <div>15</div>
              //       </li>
              //     </ul>
              //     <div className="p-4 border-t mx-8 mt-2">
              //       <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              //         Follow
              //       </button>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
