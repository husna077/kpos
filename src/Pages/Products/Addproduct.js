import react from "react";
import './Addproduct.css';
import { useState } from "react";

function Addproduct({onChange = () => {}}) {
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
            <div className="add-supply-heading-div">
                    <p id="add-supply-text">Add Product</p>
                </div>
                 <form>
            <div className="form-info-div">
                
               
                    <div className="add-supply">
                        <div className="add-supply-info-div">
                        <lable className="info-name-lable">Product Name </lable>
                        <input 
                        type="text"
                        name="name"
                        id="add-supply-name"
                        /></div>
                        <div className="add-supply-info-div" >
                        <lable className="info-name-lable">Stock</lable>
                        <input 
                        type="email"
                        name="email"
                        id="add-supply-name"/>
                        </div>
                    </div>
                    <div className="add-supply">
                        <div className="add-supply-info-div">
                        <lable className="info-name-lable">Product Barcode</lable>
                        <input 
                        type="text"
                        name="name"
                        id="add-supply-name"/>
                        </div>
                        <div className="add-supply-info-div">
                        <lable className="info-name-lable">Product Quantity</lable>
                        <input 
                        type="text"
                        name="name"
                        id="add-supply-name"/>
                        </div>
                    </div>
                    <button type="Submit" id="add-supply-btn">Add Product</button>
                

            </div>
            </form>
        </div>
    )
}
export default Addproduct; 