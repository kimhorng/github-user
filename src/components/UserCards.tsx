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
          <h2 className="font-semibold text-xl capitalize" id="username">
            {name ? name : login}
          </h2>
          <h3 className="text-gray-500" id="company">
            {company ? company : "No Company"}
          </h3>
        </div>
        <div className="mt-auto">
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <img src="/assets/followers.svg" width="16px" alt="followers" />
              <div>
                {followers > 1000
                  ? (followers / 1000).toFixed(1) + "k"
                  : followers}{" "}
                followers
              </div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <img src="/assets/following.svg" width="16px" alt="following" />
              <div>{following} following</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <img src="/assets/repos.svg" width="16px" alt="repositorys" />
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
              <button className="w-1/2 mx-auto rounded-full bg-gray-700 hover:shadow-lg font-semibold text-white px-6 py-2 relative inline-flex items-center justify-start overflow-hidden transition-all   hover:bg-tranparent group">
                <span className="w-0 h-0  bg-green-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
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
