import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './Sidebar.css';
import logo from "../assets/logo.webp";


function Sidebar({ visible }) {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <div className="sidebar">

            {visible && (
                <div className="sidebar-content">
                    <div >
                        <img src={logo} className="k-logo" />
                    </div>
                    <ul className="sidebar-content-list">
                        <li><NavLink to="/dashboard" className="sidebar-link"><label className="sidebar-lable">Dashboard</label></NavLink></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('reports')}>
                            <label className="sidebar-lable">Reports ▼</label>
                            {activeDropdown === 'reports' && (
                                <ul className="dropdown">
                                    <li><Link to="/Reports/Stock" >Stock</Link></li>
                                    <li><Link to="/Reports/BranchwiseStock">Branchwise Stock</Link></li>
                                    <li><Link to="/Reports/LowStock">Low Stock</Link></li>
                                    <li><Link to="/Reports/OutOfStock">Out of Stock</Link></li>
                                    <li><Link to="/Reports/SaleSummary">Sale Summary </Link></li>
                                    <li><Link to="/Reports/SupplySummary">Supply Summary</Link></li>
                                    <li><Link to="/Reports/Customers">Customers</Link></li>
                                    <li><Link to="/Reports/Sales">Sales</Link></li>
                                                                
                                </ul>
                            )}
                        </div></li>
                        <li>
                        <div className="sidebar-link" onClick={() => toggleDropdown('supply')}>
                            <label className="sidebar-lable">Supply ▼</label>
                            {activeDropdown === 'supply' && (
                                <ul className="dropdown">
                                    <li><Link to="/Supply/ListSupply">List Supply</Link></li>
                                    <li><Link to="/Supply/AddSupply">Add Supply</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li>
                        <div className="sidebar-link" onClick={() => toggleDropdown('products')}>
                            <label className="sidebar-lable">Products ▼</label>
                            {activeDropdown === 'products' && (
                                <ul className="dropdown">
                                    <li><Link to="/dashboard/overview">Product List</Link></li>
                                    <li><Link to="/dashboard/analytics">Add Product</Link></li>
                                    <li><Link to="/dashboard/analytics">Print Barcode</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('users')}>
                            <label className="sidebar-lable">Users ▼</label>
                            {activeDropdown === 'users' && (
                                <ul className="dropdown">
                                    <li><Link to="/dashboard/overview">User List</Link></li>
                                    <li><Link to="/dashboard/analytics">Add User</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('settings')}>
                            <label className="sidebar-lable">Settings ▼</label>
                            {activeDropdown === 'settings' && (
                                <ul className="dropdown">
                                    <li><Link to="/dashboard/overview">General Settings</Link></li>
                                    <li><Link to="/dashboard/analytics">Branches</Link></li>
                                    <li><Link to="/dashboard/analytics">Add Branch</Link></li>
                                </ul>
                            )}
                        </div></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Sidebar;