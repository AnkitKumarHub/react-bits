import { LOGO_URL } from "../utils/constant";
import {  useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("Header Render")

  //case-1  => if No dependency array => useEffect is called on every render
  //case-2 => if dependency array is Empty => [] => useEffect is called on initial render (just Once)
  //case-3 => if dependency array is [btnName] => called everytime btnName is updated

  // useEffect(()=>{
  //   console.log("useffect called")
  // }, [btnName])

  return (
    <div className="header ">
      <div className="logo-container"> 
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to ="/about">About us</Link>
          </li>
          <li>
            <Link to ="/contact">Contact us</Link>
          </li>
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
