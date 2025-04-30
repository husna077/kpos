import React from "react";
import './Dashboard.css';
import graph from '../assets/graph.png';

const Dashboard =() =>{
    return(
        <div className="dashboard">
            <div className="sales-and-stock">
                <div className="sales-divs">
                    <p>279928.50</p>
                    <p>Total Sale</p>
                </div>
                <div className="sales-divs">
                    <p>121</p>
                    <p>Low Stock Products</p>
                </div>
                <div className="sales-divs">
                    <p>1175</p>
                    <p>Out Of Stock Products</p>
                </div>
                
            </div>
            <div>
                    <img src={graph} id="graph-image"/>
                </div>
        </div>

    )
}
export default Dashboard;