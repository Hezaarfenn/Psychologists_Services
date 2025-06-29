import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, selectIsAuthenticated } from "../../redux/auth/authSlice";
import BaseModal from "../BaseModal/BaseModal";
import Login from "../Login/Login";
import Registiration from "../Registration/Registration";
import Logout from "../Logout/Logout";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegOpen, setIsRegOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsLogoutOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegOpen(false);
    setIsLogoutOpen(false);
  };

  return (
    <>
      <header className="max-w-[1440px] mx-auto pt-6 px-8 relative z-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-[130px]">
            <a href="/" className="text-xl font-bold">
              <span className="text-[rgb(var(--primary-color))]">
                psychologists.
              </span>
              services
            </a>

            <div className="flex items-center gap-3 md:hidden">
              <ThemeSelector />
              <button
                className="text-[rgb(var(--primary-color))]"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 text-lg text-[#191A15]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/psychologists">Psychologists</NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
            )}
          </ul>

          {/* Desktop Auth Buttons */}
          <ul className="hidden md:flex gap-2 md:mt-0">
            {isAuthenticated ? (
              <>
                <li className="flex items-center text-[#191A15] mr-4 gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center bg-[rgb(var(--primary-color))] rounded-[10px]">
                    <svg width="16" height="16">
                      <use href="/sprite.svg#user" />
                    </svg>
                  </div>
                  <span>{user?.name || user?.email}</span>
                </li>
                <li>
                  <button
                    onClick={() => setIsLogoutOpen(true)}
                    className="w-[124px] h-12 border border-[#191A15]/20 rounded-[30px] hover:bg-gray-300 hover:border-transparent"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="w-[124px] h-12 border border-[#191A15]/20 rounded-[30px] hover:bg-gray-300 hover:border-transparent"
                  >
                    Log In
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsRegOpen(true)}
                    className="w-[171px] h-12 bg-[rgb(var(--primary-color))] text-[rgb(var(--primary-text-on))] border-transparent rounded-[30px] hover:bg-[rgb(var(--primary-color-hover))]"
                  >
                    Registration
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white transition-transform duration-300 transform translate-x-0">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <a href="/" className="text-xl font-bold">
                <span className="text-[rgb(var(--primary-color))]">
                  psychologists.
                </span>
                services
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-[rgb(var(--primary-color))]"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col items-center mt-12 gap-8 text-xl text-[#191A15] font-medium">
              <li>
                <NavLink
                  to="/"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `px-6 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[rgb(var(--primary-color))] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/psychologists"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `px-6 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[rgb(var(--primary-color))] text-white"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Psychologists
                </NavLink>
              </li>
              {isAuthenticated && (
                <li>
                  <NavLink
                    to="/favorites"
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      `px-6 py-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[rgb(var(--primary-color))] text-white"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    Favorites
                  </NavLink>
                </li>
              )}
              {!isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={() => {
                        setIsLoginOpen(true);
                        toggleMobileMenu();
                      }}
                      className="px-6 py-2 rounded-full transition-all duration-200 hover:bg-gray-100"
                    >
                      Log In
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setIsRegOpen(true);
                        toggleMobileMenu();
                      }}
                      className="px-6 py-2 rounded-full transition-all duration-200 hover:bg-gray-100"
                    >
                      Registration
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      setIsLogoutOpen(true);
                      toggleMobileMenu();
                    }}
                    className="px-6 py-2 rounded-full transition-all duration-200 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </header>

      {/* Modals */}
      {!isAuthenticated && (
        <>
          <BaseModal isOpen={isLoginOpen} onRequestClose={closeModals}>
            <Login onClose={closeModals} />
          </BaseModal>
          <BaseModal isOpen={isRegOpen} onRequestClose={closeModals}>
            <Registiration onClose={closeModals} />
          </BaseModal>
        </>
      )}

      <Logout
        isOpen={isLogoutOpen}
        onRequestClose={closeModals}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Header;
