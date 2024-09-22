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
       <div className="flex justify-between bg-orange-200 shadow-lg m-2 mb-2">
          <div className="logo-container">
             <img className="w-56" src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
             <ul className="flex p-4 m-4">
               <li className="px-4">
                  Online Status:{onlinestatus ?"✅" :"🚫"}
               </li>
                <li className="px-4">
                  <Link to="/">Home</Link></li>
                <li className="px-4">
                  <Link to="/about">about</Link>
                </li>
                <li className="px-4">
                  <Link to="/contactus">Contact us</Link>
               </li>
               <li className="px-4">
                  <Link to="/grocery">Grocery</Link>
               </li>
                <li className="px-4">Cart</li>
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