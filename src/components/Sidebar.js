import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import logo from "../assets/logo.webp";

function Sidebar({ visible }) {

    return (
        <div className="sidebar">
            
            {visible && (
                <div className="sidebar-content">
                    <div >
                        <img src={logo} className="k-logo"/>
                        </div>
                    <ul className="sidebar-content-list">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/reports">Reports</Link></li>
                        <li><Link to="/supply">Supply</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Sidebar;