import React from "react";
import './Setting.css';


const Setting = ()=>{
    return(
        <div className="setting-main-user">
            <div className="settings-main-content">
            <p className="main-content">Settings</p>
            </div>
            <div className="personal-info">
                <div className="personal-div1">
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Name
                        </lable>
                        <input type="text" classname="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Tax Rate
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Logo Light
                        </lable>
                        <input classname="input-box-setting">
                        </input>

                    </div>

                </div>
                <div className="personal-div1">
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            GST
                        </lable>
                        <input classname="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            LOGO
                        </lable>
                        <input classname="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Favicon
                        </lable>
                        <input classname="input-box-setting">
                        </input>

                    </div>

                </div>
            </div>
            <div className="payment-details">
                <p>Payment Details</p>

            </div>
            <div className="personal-info">
                <div className="personal-div1">
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Bank Name
                        </lable>
                        <input classname="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Branch
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            UPI ID
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>

                </div>
                <div className="personal-div1">
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            Account Number
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            IFSC
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            QR-Code
                        </lable>
                        <input classname="input-box-setting"></input>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Setting;