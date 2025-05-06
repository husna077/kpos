import React from "react";
import './Dashboard.css';
import graph from '../assets/graph.png';

const Dashboard =() =>{
    return(
        <div className="dashboard">
            <div className="sales-and-stock">
                <div className="sales-divs">
                    <p className="dashboard-p">279928.50</p>
                    <p className="dashboard-p">Total Sale</p>
                </div>
                <div className="sales-divs">
                    <p className="dashboard-p">121</p>
                    <p className="dashboard-p">Low Stock Products</p>
                </div>
                <div className="sales-divs">
                    <p className="dashboard-p">1175</p>
                    <p className="dashboard-p">Out Of Stock Products</p>
                </div>
                
            </div>
            <div>
                    <img src={graph} id="graph-image"/>
                </div>
        </div>

    )
}
export default Dashboard;