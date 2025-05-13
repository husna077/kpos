import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './Sidebar.css';
import logo from "../assets/logo.webp";
import products from '../assets/product.png';
import { TfiPackage } from "react-icons/tfi";
import { TfiBarChart } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";
import { TfiPencilAlt } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";



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
                        <li><NavLink to="/dashboard" className="sidebar-link"><label className="sidebar-lable"><TfiHome /> Dashboard</label></NavLink></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('reports')}>
                            <label className="sidebar-lable"><TfiPencilAlt /> Reports ▼</label>
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
                            <label className="sidebar-lable"><TfiBarChart /> Supply ▼</label>
                            {activeDropdown === 'supply' && (
                                <ul className="dropdown">
                                    <li><Link to="/Supply/ListSupply">List Supply</Link></li>
                                    <li><Link to="/Supply/AddSupply">Add Supply</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li>
                        <div className="sidebar-link" onClick={() => toggleDropdown('products')}>
                            <div>
                                
                                <label className="sidebar-lable"><TfiPackage /> Products ▼</label>
                                </div>
                            {activeDropdown === 'products' && (
                                <ul className="dropdown">
                                    <li><Link to="/Products/ProductsList">Product List</Link></li>
                                    <li><Link to="/Products/Addproduct">Add Product</Link></li>
                                    <li><Link to="/Product/PrintBarcode">Print Barcode</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('users')}>
                            <label className="sidebar-lable"><VscAccount /> Users ▼</label>
                            {activeDropdown === 'users' && (
                                <ul className="dropdown">
                                    <li><Link to="/Users/UserList">User List</Link></li>
                                    <li><Link to="/Users/AddUser">Add User</Link></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('settings')}>
                            <label className="sidebar-lable"><VscSettingsGear /> Settings ▼</label>
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