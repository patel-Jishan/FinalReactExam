import { Link, useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    nav("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Student System
        </h1>

       
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white font-medium hover:text-yellow-300 transition ${
                isActive ? "border-b-2 border-yellow-300" : ""
              }`
            }
          >
            Students
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `text-white font-medium hover:text-yellow-300 transition ${
                isActive ? "border-b-2 border-yellow-300" : ""
              }`
            }
          >
            Add Student
          </NavLink>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
