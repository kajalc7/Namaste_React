import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlinestatus = useOnlinestatus();
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between items-center bg-green-200  shadow-lg px-4 py-4 w-full max-w-screen-s rounded-xl mx-auto sm:bg-orange-200  lg:bg-orange-400">
      {/* when header side will change solor will change to darker orange like when we shrink our screen */}
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 space-x-6">
          <li>Online Status: {onlinestatus ? "✅" : "🚫"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
