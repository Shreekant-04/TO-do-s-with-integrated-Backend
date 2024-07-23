// src\components\NavBar.jsx
const NavBar = () => {
  return (
    <div
      className="w-full flex items-center justify-between p-4"
      style={{ backgroundColor: "#023047" }}
    >
      <h2 className="text-2xl font-bold text-white">To Do's</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-white rounded-md overflow-hidden shadow-inner">
          <span
            className="material-symbols-outlined p-2"
            style={{ color: "#219ebc" }}
          >
            search
          </span>
          <input
            type="text"
            id="search"
            className="px-2 py-1 outline-none"
            placeholder="Not Working..."
          />
        </div>
        <button
          className="px-4 py-2 font-semibold text-white rounded-md"
          style={{ backgroundColor: "#fb8500" }}
        >
          Theme
        </button>
      </div>
    </div>
  );
};

export default NavBar;
