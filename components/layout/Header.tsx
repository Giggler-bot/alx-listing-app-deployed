const Header = () => {
  return (
    <header className="p-4 shadow-md flex justify-between items-center bg-white">
      <h1 className="text-xl font-bold">StayFinder</h1>
      <input className="border p-2 rounded-md" placeholder="Search" />
      <div className="space-x-4">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};
export default Header;
