import react from "react";
import './Sales.css';
import { useState, useEffect } from "react";

function Sales({onChange = () => {}}) {
    const [value, setValue] = useState(100);
    
        const handleChange = (e) => {
            const newValue = parseInt(e.target.value, 10);
            setValue(newValue);
            onChange(newValue);
        }
        const [data, setData] = useState([]);
            useEffect(() => {
                const dummyData = [
                    { id: 1, productname: "Product 1", sale: 2512 },
                    { id: 2, productname: "Product 2", sale: 2834 },
                    { id: 3, productname: "Product 3", sale: 2231 },
                ];
                setData(dummyData);
            }, []);
    return(
        <div className="lowstock-main">
            <div className="lowstock-dropdown">
                <select value={value} onChange={handleChange} className="dropdown-one-branch">
                    <option value={1}>One Branch</option>
                    <option value={2}>Two Branch</option>
                    <option value={3}>Vasai</option>
                    <option value={4}>i-diligence</option>
                    <option value={5}>aslam-khan</option>
                </select>
                <button className="filter-btn">Filter</button>
            </div>
            <div className="branchwise-content">
            <p className="stock-summary">Sales List ( ₹279928.50 )</p>
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
                            <tr><th>Sr.No</th><th>Product Name</th><th>Sale</th></tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}><td>{item.id}</td><td>{item.productname}</td><td>{item.sale}</td></tr>
                            ))}
                        </tbody>
                    </table>
</div>
        </div>
        </div>
    )
}
export default Sales; 