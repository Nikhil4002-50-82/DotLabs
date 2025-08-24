const Header = () => {
  return (
    <div className="w-full px-[2.5em] py-[1.5em] mb-2 flex justify-between items-center shadow-custom">
      <h1 className="font-DotLabs text-3xl text-gray-900 font-bold">DotLabs</h1>
      <nav className="space-x-6 text-gray-700 text-lg">
        <a className="">Home</a>
        <a className="">Services</a>
        <a className="">Portfolio</a>
        <a className="">Contact</a>
      </nav>
    </div>
  );
};
export default Header;
