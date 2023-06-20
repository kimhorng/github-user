const Logo = () => {
  return (
    <div className="flex border-b border-gray-500  justify-center items-center fixed w-full top-0 pt-5 pb-3 z-20  left-0  bg-white">
      <img src="/logo.png" className="w-40 rounded-full" alt="finzTust" />
      <h1 className="text-2xl px-2 first-letter:text-5xl font-bold text-gray-700">
        GitHub Users
      </h1>
    </div>
  );
};

export default Logo;
