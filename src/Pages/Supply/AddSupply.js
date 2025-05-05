import react from "react";
import './AddSupply.css';
import { useState } from "react";

function AddSupply({onChange = () => {}}) {
    const [value, setValue] = useState(100);
    
        const handleChange = (e) => {
            const newValue = parseInt(e.target.value, 10);
            setValue(newValue);
            onChange(newValue);
        }
    return(
        <div className="add-supply-main">
            {/* <div className="branch-dropdown">
                <select value={value} onChange={handleChange} className="dropdown-one-branch">
                    <option value={1}>One Branch</option>
                    <option value={2}>Two Branch</option>
                    <option value={3}>Vasai</option>
                    <option value={4}>i-diligence</option>
                    <option value={5}>aslam-khan</option>
                </select>
                <button className="filter-btn">Filter</button>
            </div> */}
            <div className="form-info-div">
                <form>
                    <div className="add-supply">
                        <lable>Product Name </lable>
                        <input 
                        type="text"
                        name="name"
                        id="add-supply-name"
                        
                        /><br/>
                        <label>Stock</label>
                        <input 
                        type="email"
                        name="email"
                        id="add-supply-email"/>
                        <button type="Submit" id="add-supply-btn">Add Supply</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AddSupply; 