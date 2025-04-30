import React, { useState } from "react";
import "./Navbar.css";
import acc from '../assets/account.jpg';


function Navbar({onToggleSidebar}){
   
    return(
        <div className="navbar">
            <div className="k-heading-sidebar">
            <h3 id="navbar-heading">Kaushalya</h3>
            <button className="menu-btn" onClick={onToggleSidebar}>☰</button>
            </div>
            <div className="main-user">
                <img src={acc} id="account-image"/>
                <p id="main-user-text">Main User</p>
                <div>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default Navbar;
