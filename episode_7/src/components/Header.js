import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header ">
      <div className="logo-container"> 
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
