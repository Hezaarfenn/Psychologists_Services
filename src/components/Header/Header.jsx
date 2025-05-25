import { Link } from "react-router-dom";
import logo from "/PsychologistsLogo.svg";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img width="218px" height="28px" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Header;
