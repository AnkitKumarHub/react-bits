import { LOGO_URL } from "../utils/constant";
import {  useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // console.log("Header Render")

  //case-1  => if No dependency array => useEffect is called on every render
  //case-2 => if dependency array is Empty => [] => useEffect is called on initial render (just Once)
  //case-3 => if dependency array is [btnName] => called everytime btnName is updated

  // useEffect(()=>{
  //   console.log("useffect called")
  // }, [btnName])

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-slate-50">
      <div className="logo-container"> 
        <img className="w-56" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          
          <li className="px-6 text-lg font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 text-lg font-medium">
            <Link to ="/about">About us</Link>
          </li>
          <li className="px-6 text-lg font-medium">
            <Link to ="/contact">Contact us</Link>
          </li>
          <li className="px-6 text-lg font-medium">
            <Link to ="/grocery">Grocery</Link>
          </li>
          <li className="px-6 text-lg font-medium">Cart</li>
          <button
            className="px-6 text-lg font-semibold"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-1"> {onlineStatus ? "🟢" : "🔴"} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
