import React from "react";

export default function UserCards({
  name,
  avatar,
  followers,
  following,
  company,
  login,
  repos,
}: {
  name: string;
  avatar: string;
  followers: number;
  following: number;
  company: string;
  login: string;
  repos: number;
}) {
  return (
    <div className="sm:w-[300px] md:w-[320px] lg:w-[350px] p-3 flex-col justify-center items-center">
      <div className="mx-auto w-full  shadow-xl rounded-lg text-gray-900 h-full flex flex-col bg-white">
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
            src={avatar}
            alt={name}
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold text-xl capitalize">
            {name ? name : login}
          </h2>
          <h3 className="text-gray-500">{company ? company : "No Company"}</h3>
        </div>
        <div className="mt-auto">
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
              </svg>
              <div>
                {followers > 1000
                  ? (followers / 1000).toFixed(1) + "k"
                  : followers}{" "}
                followers
              </div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <div>{following} following</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <svg
                className="w-4 fill-current text-blue-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <div>
                {repos} {repos > 0 ? "repos" : "repo"}
              </div>
            </li>
          </ul>
          <div className="p-4 border-t mx-8 mt-2">
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex justify-center"
            >
              {/* <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                Visit
              </button> */}
              <button className="w-1/2 mx-auto rounded-full bg-gray-700 hover:shadow-lg font-semibold text-white px-6 py-2 relative inline-flex items-center justify-start overflow-hidden transition-all   hover:bg-tranparent group">
                <span className="w-0 h-0  bg-green-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Visit
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}