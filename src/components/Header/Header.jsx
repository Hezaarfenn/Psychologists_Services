import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "/PsychologistsLogo.svg";
import AuthModal from "../AuthModal/AuthModal";
import Login from "../Login/Login";
import Registiration from "../Registration/Registration";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistirationOpen, setIsRegistirationOpen] = useState(false);

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
          </ul>
        </div>

        <ul className="flex gap-2 mt-5 md:mt-0">
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
        </ul>
      </section>

      <AuthModal
        isOpen={isLoginOpen}
        onRequestClose={() => setIsLoginOpen(false)}
      >
        <Login onClose={() => setIsLoginOpen(false)} />
      </AuthModal>

      <AuthModal
        isOpen={isRegistirationOpen}
        onRequestClose={() => setIsRegistirationOpen(false)}
      >
        <Registiration onClose={() => setIsRegistirationOpen(false)} />
      </AuthModal>
    </>
  );
};

export default Header;
