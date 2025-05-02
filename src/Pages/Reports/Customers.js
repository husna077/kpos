import React from "react";
import './Customers.css';
import { useState } from "react";
import Database from './databse.png';

function Customers({ onChange }) {
    const [value, setValue] = useState(100);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
        onChange(newValue);
    }
    return (
        <div className="stock-main">
            <p className="stock-summary">Customers List</p>
            <div className="second-div-stock">
            <div className="value-div " style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <label className="value-lable">Show</label>
                <select value={value} onChange={handleChange} style={{ padding: '4px 8px' }}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <label className="value-lable">entries</label>
            </div>
            <div className="search-box">
                <lable className="search-lable"> Search: </lable><input className="input-box"></input>
            </div>
            
            </div>
            {/* <div className="image-stock">
                <img src={Database} className="image-databse"/>
            </div> */}
        </div>
    )
}
export default Customers;