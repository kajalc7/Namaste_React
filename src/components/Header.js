import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from  "react-router-dom"
import useOnlinestatus from "../utils/useOnlineStatus";


const Header=()=>{

   const onlinestatus = useOnlinestatus();

   const[btnNameReact,setbtnNameReact]=useState("Login")
    return(
       <div className="header">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="nav-items">
             <ul>
               <li>
                  Online Status:{onlinestatus ?"✅" :"🚫"}
               </li>
                <li>
                  <Link to="/">Home</Link></li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact us</Link>
               </li>
                <li>Cart</li>
                <button className="Login" onClick={()=>{
                  btnNameReact==="Login" ? setbtnNameReact("Logout") :setbtnNameReact("Login"); 
                }}
               >{btnNameReact}</button>
             </ul>
          </div>
       </div>
    )
 }
 
 export default Header;