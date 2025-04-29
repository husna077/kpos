import React, { useState } from "react";
import "./Navbar.css";


function Navbar({onToggleSidebar}){
   
    return(
        <div className="navbar">
            <div className="k-heading-sidebar">
            <h3 id="navbar-heading">Kaushalya</h3>
            <button className="menu-btn" onClick={onToggleSidebar}>☰</button>
            </div>
            <div className="main-user">
                <p id="main-user-text">Main User</p>
            </div>
            
        </div>
    )
}
export default Navbar;
