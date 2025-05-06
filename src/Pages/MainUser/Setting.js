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
                        <input type="text" id="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Tax Rate
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Logo Light
                        </lable>
                        <input id="input-box-setting">
                        </input>

                    </div>

                </div>
                <div className="personal-div1">
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            GST
                        </lable>
                        <input id="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            LOGO
                        </lable>
                        <input id="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Favicon
                        </lable>
                        <input id="input-box-setting">
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
                        <input id="input-box-setting">
                        </input>

                    </div>
                    <div className="lable-and-input">
                        <lable classname="lable-personal">
                            Branch
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            UPI ID
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>

                </div>
                <div className="personal-div1">
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            Account Number
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            IFSC
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>
                    <div className="lable-and-input">
                    <lable classname="lable-personal">
                            QR-Code
                        </lable>
                        <input id="input-box-setting"></input>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Setting;