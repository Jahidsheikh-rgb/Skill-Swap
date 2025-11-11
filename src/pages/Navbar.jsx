import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/Authprovider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SkillSwap
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            {user && (
              <Link to="/MyProfile" className="text-gray-700 hover:text-blue-600">
                My Profile
              </Link>
            )}

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="rounded-full overflow-hidden w-10 h-10 border-2 border-gray-300"
                >
                  <img
                    src={user.photoURL || "https://i.pravatar.cc/40"}
                    alt="avatar"
                  />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                    <div className="px-4 py-1 text-gray-600 text-sm">
                      {user.displayName || "Anonymous User"}
                    </div>
                    <Link
                      to="/MyProfile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link
                  to="/login"
                  className="px-3 py-1 border rounded hover:bg-blue-50"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          {user && (
            <Link
              to="/MyProfile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              My Profile
            </Link>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-blue-600 hover:bg-blue-50"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
