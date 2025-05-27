import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from 'react-icons/fa'; // Font Awesome
import {NavLink, Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";



function Navbar({onToggleSidebar}){
    const [dropDownOpen, setdropDownOpen]=useState(false);
    const toggleDropdown =()=>{
        setdropDownOpen(!dropDownOpen);
    }
    const handleLogout = ()=>{
        const confirmed = window.confirm("Do you want to Logout?");
        if (confirmed){
            console.log("Logged Out");
        }
        
    }
    const [openDropdown, setOpenDropdown] = useState(null);
    
      const handleDropdownToggle = (menuName) => {
        setOpenDropdown(prev => (prev === menuName ? null : menuName));
      };
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
                        <li><button className="logout-btn" onClick={handleLogout}>Log Out</button></li>
                    </ul>
                }
            </div>
            
        </div>
    )
}
export default Navbar;
