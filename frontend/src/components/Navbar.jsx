import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
  const { userInfo, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login");
  };

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        HackerNews App
      </Link>

      <div className="flex gap-4 items-center">
        {userInfo ? (
          <>
            <Link to="/bookmarks">Bookmarks</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;