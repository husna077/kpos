import React from "react";
import './Customers.css';
import { useState, useEffect } from "react";
import Database from './databse.png';

function Customers({ onChange }) {
    const [value, setValue] = useState(100);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
        onChange(newValue);
    }
    const [data, setData] = useState([]);
        useEffect(() => {
            const dummyData = [
                { id: 1, name: "John", age: 25, custid: 23465},
                { id: 2, name: "Jane", age: 28, custid: 23765},
                { id: 3, name: "Alice", age: 22, custid: 23365 },
            ];
            setData(dummyData);
        }, []);
    return (
        <div className="stock-main-first">
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
            <div className="list-stock">
                    <table>
                        <thead className="table-head">
                            <tr><th>Sr.No</th><th>Name</th><th>Age</th><th>Customer ID</th></tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}><td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.custid}</td></tr>
                            ))}
                        </tbody>
                    </table>
</div>
        </div>
    )
}
export default Customers;