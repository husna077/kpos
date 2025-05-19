import React from "react";
import './UserList.css';
import { useState, useEffect } from "react";


function UserList({ onChange }) {
    const [value, setValue] = useState(100);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
        onChange(newValue);
    }
    const [data, setData] = useState([]);
                useEffect(() => {
                    const dummyData = [
                        { id: 1, productname: "User 1", sale: 2512 },
                        { id: 2, productname: "User 2", sale: 2834 },
                        { id: 3, productname: "User 3", sale: 2231 },
                    ];
                    setData(dummyData);
                }, []);
    return (
        <div className="stock-main-first">
            <p className="stock-summary">User List</p>
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
                            <tr><th>Sr.No</th><th>User Name</th><th>User ID</th></tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}><td>{item.id}</td><td>{item.productname}</td><td>{item.sale}</td></tr>
                            ))}
                        </tbody>
                    </table>
</div>
        </div>
    )
}
export default UserList;