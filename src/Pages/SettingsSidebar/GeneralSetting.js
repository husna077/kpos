import react from "react";
import { useState } from "react";

function GeneralSetting({onChange = () => {}}) {
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
                    <p id="add-supply-text">General Setting</p>
                </div>
                <form>
            <div className="form-info-div-add-supply">
                
                
                    <div className="add-supply">
                        <lable>Name </lable>
                        <input 
                        type="text"
                        name="name"
                        id="add-supply-name"
                        /><br/>
                        </div>
                        <div className="add-supply">
                        <label>Email</label>
                        <input 
                        type="email"
                        name="email"
                        id="add-supply-name"/>
                        </div>
                        <button type="Submit" id="add-supply-btn">Save Information</button>
                    </div>
                </form>
        </div>
    )
}
export default GeneralSetting; 