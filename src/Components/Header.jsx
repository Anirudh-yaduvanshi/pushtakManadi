import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import logo from "/logo.png"; // Adjust path as needed

const Header = () => {
  const [log, setLog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      setLog(true);
    } else {
      setLog(false);
      localStorage.removeItem("auth-token");
    }
  }, [log]);

  return (
    <header className="bg-gray-800 text-white fixed w-full z-10 shadow-md p-4 flex md:justify-between justify-around items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-16 bg-amber-100 rounded-2xl cursor-pointer"
          onClick={() => navigator("/")}
        />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="text-xl md:hidden focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav className={`${menuOpen ? "block" : "hidden"} md:flex md:w-auto`}>
        <ul className="md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-lg text-center">
          {[
            { path: "/", label: "Home" },
            { path: "/book", label: "Books" },
            { path: "/about", label: "About Us" },
            { path: "/contact", label: "Contact Us" },
          ].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-violet-600 hover:bg-violet-500"
                      : "bg-gray-600 hover:bg-gray-700"
                  } px-4 py-2 rounded-lg block`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {!log && (
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-red-600 hover:bg-red-500"
                      : "bg-gray-600 hover:bg-gray-700"
                  } px-4 py-2 rounded-lg block`
                }
              >
                Login/Register
              </NavLink>
            </li>
          )}

          {log && (
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-red-600 hover:bg-red-500"
                      : "bg-gray-600 hover:bg-gray-700"
                  } px-4 py-2 rounded-lg block`
                }
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
