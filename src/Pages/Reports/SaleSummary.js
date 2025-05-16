import react from "react";
import './SaleSummary.css';
import { useState,useEffect } from "react";

function SaleSummary({onChange = () => {}}) {
    const [value, setValue] = useState(100);
    
        const handleChange = (e) => {
            const newValue = parseInt(e.target.value, 10);
            setValue(newValue);
            onChange(newValue);
        }
        const [data, setData] = useState([]);
                                    useEffect(() => {
                                        const dummyData = [
                                            { id: 1, productname: "Product 1", stock: 25, branch: 'One Branch'},
                                            { id: 2, productname: "Product 2", stock: 28, branch: "Two Branch"},
                                            { id: 3, productname: "Product 3", stock: 22, branch: "Vasai" },
                                        ];
                                        setData(dummyData);
                                    }, []);
    return(
        <div className="branchwise-main">
            <div className="branch-dropdown">
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
            <p className="stock-summary">Product Sale Report</p>
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
                            <tr><th>Sr.No</th><th>Product Name</th><th>Sale</th><th>Branch</th></tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}><td>{item.id}</td><td>{item.productname}</td><td>{item.stock}</td><td>{item.branch}</td></tr>
                            ))}
                        </tbody>
                    </table>
</div>
        </div>
        </div>
    )
}
export default SaleSummary; 