import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, selectIsAuthenticated } from "../../redux/auth/authSlice";
import { clearFavorites } from "../../redux/favorites/favoritesSlice";
import { persistor } from "../../redux/store";
import logo from "/PsychologistsLogo.svg";
import BaseModal from "../BaseModal/BaseModal";
import Login from "../Login/Login";
import Registiration from "../Registration/Registration";
import Logout from "../Logout/Logout";

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
    dispatch(clearFavorites());
    persistor.purge();
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
          <div className="flex items-center justify-between w-full md:w-auto gap-[130px]">
            <Link to="/">
              <img src={logo} width={218} height={28} alt="logo" />
            </Link>

            <button
              className="md:hidden text-[#54BE96]"
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
                  <div className="w-10 h-10 flex items-center justify-center bg-[#54BE96] rounded-[10px]">
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
                    className="w-[171px] h-12 bg-[#54BE96] text-[#FBFBFB] border-transparent rounded-[30px] hover:bg-[#36A379]"
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
              <Link to="/" onClick={toggleMobileMenu}>
                <img src={logo} width={180} alt="logo" />
              </Link>
              <button onClick={toggleMobileMenu} className="text-[#54BE96]">
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
                <NavLink to="/" onClick={toggleMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/psychologists" onClick={toggleMobileMenu}>
                  Psychologists
                </NavLink>
              </li>
              {isAuthenticated && (
                <li>
                  <NavLink to="/favorites" onClick={toggleMobileMenu}>
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
