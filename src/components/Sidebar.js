import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar({ visible }) {

    return (
        <div className="sidebar">
            {visible && (
                <div className="sidebar-content">
                    <ul className="sidebar-content">
                        <li classname="sidebar-list"><Link to="/dashboard">Dashboard</Link></li>
                        <li classname="sidebar-list"><Link to="/reports">Reports</Link></li>
                        <li classname="sidebar-list"><Link to="/supply">Supply</Link></li>
                        <li classname="sidebar-list"><Link to="/products">Products</Link></li>
                        <li classname="sidebar-list"><Link to="/users">Users</Link></li>
                        <li classname="sidebar-list"><Link to="/settings">Settings</Link></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Sidebar;