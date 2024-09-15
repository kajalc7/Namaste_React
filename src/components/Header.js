import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constants";

let btnName="LogIn"

const Header=()=>{
    return(
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="Login" onClick={()=>{btnName="LogOut";
                   console.log(btnName);
                   }}
               >{btnName}</button>
             </ul>
          </div>
       </div>
    )
 }
 
 export default Header;