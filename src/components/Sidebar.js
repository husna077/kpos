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
                        <li><NavLink  to="/dashboard" className="sidebar-link"><label className="sidebar-lable"><TfiHome /> Dashboard</label></NavLink></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('reports')}>
                            <label className="sidebar-lable"><TfiPencilAlt /> Reports ▼</label>
                            {activeDropdown === 'reports' && (
                                <ul className="dropdown">
                                    <li><NavLink to="/Reports/Stock" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Stock</NavLink></li>
                                    <li><NavLink to="/Reports/BranchwiseStock" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Branchwise Stock</NavLink></li>
                                    <li><NavLink to="/Reports/LowStock" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Low Stock</NavLink></li>
                                    <li><NavLink to="/Reports/OutOfStock" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Out of Stock</NavLink></li>
                                    <li><NavLink to="/Reports/SaleSummary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Sale Summary </NavLink></li>
                                    <li><NavLink to="/Reports/SupplySummary" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Supply Summary</NavLink></li>
                                    <li><NavLink to="/Reports/Customers" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Customers</NavLink></li>
                                    <li><NavLink to="/Reports/Sales" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Sales</NavLink></li>
                                                                
                                </ul>
                            )}
                        </div></li>
                        <li>
                        <div className="sidebar-link" onClick={() => toggleDropdown('supply')}>
                            <label className="sidebar-lable"><TfiBarChart /> Supply ▼</label>
                            {activeDropdown === 'supply' && (
                                <ul className="dropdown">
                                    <li><NavLink to="/Supply/ListSupply" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>List Supply</NavLink></li>
                                    <li><NavLink to="/Supply/AddSupply" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Add Supply</NavLink></li>
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
                                    <li><NavLink to="/Products/ProductsList" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Product List</NavLink></li>
                                    <li><NavLink to="/Products/Addproduct" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Add Product</NavLink></li>
                                    <li><NavLink to="/Product/PrintBarcode" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Print Barcode</NavLink></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('users')}>
                            <label className="sidebar-lable"><VscAccount /> Users ▼</label>
                            {activeDropdown === 'users' && (
                                <ul className="dropdown">
                                    <li><NavLink to="/Users/UserList" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>User List</NavLink></li>
                                    <li><NavLink to="/Users/AddUser" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Add User</NavLink></li>
                                </ul>
                            )}
                        </div></li>
                        <li><div className="sidebar-link" onClick={() => toggleDropdown('settings')}>
                            <label className="sidebar-lable"><VscSettingsGear /> Settings ▼</label>
                            {activeDropdown === 'settings' && (
                                <ul className="dropdown">
                                    <li><NavLink to="/SettingsSidebar/GeneralSetting" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>General Settings</NavLink></li>
                                    <li><NavLink to="/SettingsSidebar/Branches" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Branches</NavLink></li>
                                    <li><NavLink to="/SettingsSidebar/AddBranch" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Add Branch</NavLink></li>
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