import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, selectIsAuthenticated } from "../../redux/auth/authSlice";
import logo from "/PsychologistsLogo.svg";
import BaseModal from "../BaseModal/BaseModal";
import Login from "../Login/Login";
import Registiration from "../Registration/Registration";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistirationOpen, setIsRegistirationOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <section className="max-w-[1440px] min-w-[768] mx-auto flex flex-col md:flex-row items-center justify-between pt-6 px-8">
        <div className="flex items-center gap-[130px]">
          <Link to="/">
            <img width="218" height="28" src={logo} alt="logo" />
          </Link>

          <ul className="flex gap-10 text-lg text-[#191A15]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/psychologists">Psychologists</NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink to="favorites">Favorites</NavLink>
              </li>
            )}
          </ul>
        </div>

        <ul className="flex gap-2 mt-5 md:mt-0">
          {isAuthenticated ? (
            <>
              <li className="flex items-center text-[#191A15] mr-4 gap-3.5">
                <div className="flex justify-center items-center w-10 h-10 border border-transparent bg-[#54BE96] rounded-[10px] ">
                  <svg width="16" height="16">
                    <use href="/sprite.svg#user" />
                  </svg>
                </div>
                <span> {user?.name || user?.email}</span>
              </li>
              <li className="w-[124px] h-12 border border-[#191A15]/20 hover:bg-gray-300 hover:border-transparent rounded-[30px] cursor-pointer flex items-center justify-center">
                <button onClick={handleLogout} className="cursor-pointer">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="w-[124px] h-12 border border-[#191A15]/20 hover:bg-gray-300 hover:border-transparent rounded-[30px] cursor-pointer flex items-center justify-center">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="cursor-pointer"
                >
                  Log In
                </button>
              </li>

              <li className="w-[171px] h-12 border bg-[#54BE96] text-[#FBFBFB] border-transparent rounded-[30px] cursor-pointer flex items-center justify-center hover:bg-[#36A379]">
                <button
                  onClick={() => setIsRegistirationOpen(true)}
                  className="cursor-pointer"
                >
                  Registration
                </button>
              </li>
            </>
          )}
        </ul>
      </section>

      {!isAuthenticated && (
        <>
          <BaseModal
            isOpen={isLoginOpen}
            onRequestClose={() => setIsLoginOpen(false)}
          >
            <Login onClose={() => setIsLoginOpen(false)} />
          </BaseModal>

          <BaseModal
            isOpen={isRegistirationOpen}
            onRequestClose={() => setIsRegistirationOpen(false)}
          >
            <Registiration onClose={() => setIsRegistirationOpen(false)} />
          </BaseModal>
        </>
      )}
    </>
  );
};

export default Header;
