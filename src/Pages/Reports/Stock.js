import React, { useEffect } from "react";
import './Stock.css';
import { useState } from "react";
import Database from './databse.png';

function Stock({ onChange }) {
    const [value, setValue] = useState(100);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
        onChange(newValue);
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const dummyData = [
            { id: 1, name: "John", age: 25 },
            { id: 2, name: "Jane", age: 28 },
            { id: 3, name: "Alice", age: 22 },
        ];
        setData(dummyData);
    }, []);
    return (
        <div className="stock-main-first">
            <p className="stock-summary">Stock Summary (Value Rs. 4295346.4)</p>
            <div className="second-div-stock">
                <div className="value-div " style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label className="value-lable">Show</label>
                    <select value={value} onChange={handleChange} style={{ padding: '4px 8px' }}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <label className="value-lable">Entries</label>
                </div>
                <div className="search-box">
                    <lable className="search-lable"> Search: </lable><input className="input-box"></input>
                </div>
                </div>
                
                <div className="list-stock">
                    <table>
                        <thead className="table-head">
                            <tr><th>Sr.No</th><th>Name</th><th>Age</th></tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.age}</td></tr>
                            ))}
                        </tbody>
                    </table>
</div>
        </div>
    )
}

export default Stock;