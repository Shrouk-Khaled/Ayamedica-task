import React , { useState } from 'react'
import camera from "../../../assets/camera-icon.png";
import Fade  from "react-reveal/Fade";
export default function Signup({setHaveAccount}) {
    const [agreePolicy, setAgreePolicy]= useState(false);

    const goLogin= ()=>{
        setHaveAccount(true);
    }

    const handleAgreePolicy= ()=>{
        setAgreePolicy( !agreePolicy );
    };
  return (
    <Fade>
        <form method= "POST" action= "#" style= {{width: "100%"}} className="Register-Form g-3 m-auto">
            <div className= "d-flex flex-column align-items-center">
                <h3 className="py-2" style= {{fontWeight: "bold"}}>
                    <span className="py-2" style={{ color: '#000' , borderBottom: "3px solid #18BAB4"}}>Crea</span>
                    <span className="py-2" style={{ color: '#000' , borderBottom: "3px solid rgb(195 233 232)"}}>te Account</span> 
                </h3>
                <p style= {{fontWeight: "bold"}}>Organization Profile </p>
                <div 
                className= "d-flex align-items-center justify-content-center"
                style={{width: "55px", height: "55px", borderRadius: "50%", background: "rgb(237 231 231 / 48%)"}}>
                    <img src={camera} alt="Camera Icon" width="30px" height="30px" className="p-1"/>
                </div>
            </div>
            <div className= "row d-flex flex-column align-items-center">
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-6">
                            <select className="form-select text-muted" aria-label="Select Account Type" name= "AccountType">
                                <option selected disabled>Account Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Email" name= "Email"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Organization Name" name="OrgName"/>
                        </div>
                        <div className="col-6">
                            <select className="form-select text-muted" aria-label="Select State" name= "State">
                                <option selected disabled>State</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Main Branch Name" name="BranName"/>
                        </div>
                        <div className="col-6">
                            <select className="form-select text-muted" aria-label="Select Area" name= "Area">
                                <option selected disabled>Area</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Phone Number" name="PhoneNumber"/>
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Address" name="Address"/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-4 mt-3">
                    <input className="form-check-input" type="radio" name="PrivacyPolicy" id="PrivacyPolicy" checked={agreePolicy} onClick={()=> handleAgreePolicy()}/>
                    <label className="form-check-label text-muted px-2"  htmlFor="PrivacyPolicy">
                        I agree to the <span style= {{color: "#18BAB4", borderBottom: "1px solid #18BAB4"}}> Privacy Policy </span> 
                    </label>
                </div>
                <div className="col-12 my-2 d-flex flex-column align-items-center">
                    <button type="button" className="btn p-2 m-2 shadow shadow-lg" 
                    style={{backgroundColor: agreePolicy?"rgb(24, 186, 180)":"grey", color: "#fff", width: "70%"}} 
                    id= "Next-btn" disabled={!agreePolicy}>NEXT</button>
                    <button type="button" className="btn p-2 m-2 shadow shadow-lg" style={{backgroundColor: "#fff", color: "rgb(24, 186, 180)", border: "1px solid #18BAB4", width: "70%"}} id= "Back-btn" onClick={ ()=> goLogin() }>BACK</button>
                </div>
            </div>     
        </form>
    </Fade>
  )
}
