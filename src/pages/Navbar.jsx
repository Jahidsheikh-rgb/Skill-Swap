import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null); // mock auth
  const [menuOpen, setMenuOpen] = useState(false);

  //const handleLogin = () => setUser({ displayName: "Jahid Sheikh", photoURL: "https://i.pravatar.cc/40" });
  const handleLogout = () => setUser(null);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className=" flex items-center">


            <Link to="/" className="text-2xl font-bold text-blue-600">SkillSwap</Link>
          </div>

          
          <div className="hidden md:flex md:items-center md:space-x-6">

            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>

            {user && <Link to="/profile" className="text-gray-700 hover:text-blue-600">My Profile</Link>}
            {user ? (
              <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full overflow-hidden w-10 h-10 border-2 border-gray-300">
                  <img src={user.photoURL} alt="avatar" />
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2">
                    <div className="px-4 py-1 text-gray-600 text-sm">{user.displayName}</div>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login" className="px-3 py-1 border rounded hover:bg-blue-50">Login</Link>
                <Link to="/Signup" className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Signup</Link>
              </div>
            )}
          </div>


          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link>
          {user && <Link to="/profile" className="block px-3 py-2 rounded hover:bg-gray-100">My Profile</Link>}
          {user ? (
            <button onClick={handleLogout} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-red-500">Logout</button>
          ) : (
            <>
              <Link to="/login" className="block px-3 py-2 rounded hover:bg-gray-100">Login</Link>
              <Link to="/register" className="block px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
