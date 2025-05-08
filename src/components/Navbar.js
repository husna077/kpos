import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from 'react-icons/fa'; // Font Awesome
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";



function Navbar({onToggleSidebar}){
    const [dropDownOpen, setdropDownOpen]=useState(false);
    const toggleDropdown =()=>{
        setdropDownOpen(!dropDownOpen);
    }
   
    return(
        <div className="navbar">
            <div className="k-heading-sidebar">
            <h3 id="navbar-heading">Kaushalya</h3>
            <button className="menu-btn" onClick={onToggleSidebar}>☰</button>
            </div>
            <div className="main-user" onClick={toggleDropdown}>
                
                
                <span className="account-name"><VscAccount /> Main User< FaChevronDown /></span>
                {dropDownOpen && 
                
                    <ul className="dropdown-menu">
                        <li><Link to="/mainUser/setting" ><lable id="setting-id">Settings</lable></Link></li>
                        <li>Log Out</li>
                    </ul>
                }
            </div>
            
        </div>
    )
}
export default Navbar;
