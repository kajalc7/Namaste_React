import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import  {useSelector} from "react-redux";

const Header = () => {
  const onlinestatus = useOnlinestatus();
  const [btnNameReact, setbtnNameReact] = useState("Login");

  //the usercontext we can access it any component using  usecontext hooks

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  //subscribing to a store using selector for reading data and ts nothing just a hook

  const cartItems = useSelector((store) => store.cart.items);//we only want item data from our store 
  // console.log(cartItems);

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
          <li>Cart-({cartItems.length} items)</li>
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
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
