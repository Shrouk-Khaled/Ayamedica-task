import React, { useState } from "react";
import './Login.css';
import logo from "../../../assets/AyaMedica-logo.png";
import icon from "../../../assets/AyaMedica-icon.png";
import Signup from "../Signup/Signup";
const Login = () => {
    const [haveAccount, setHaveAccount]= useState(true);
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [remeberMe, setRemeberMe]= useState(false);

    const goRegister= (ev)=>{
        ev.preventDefault();
        setHaveAccount(false);
    };

    const handelLoginInputs= (e)=>{
        e.target.name === "Username"? setUsername(`${username}${e.key}`): setPassword(`${password}${e.key}`);
    }
    
    const handelLogin= (e)=>{
        e.preventDefault();
        document.getElementById('loginFormIcon').classList.toggle('loginIconAnimation');
        if(remeberMe){
            localStorage.setItem("username", username)
            localStorage.setItem("password", password )
        }
        
    }


    return (
        <section className="login-page" style={{ height: "100vh" }}>
            <div className="container">
                <div className="row">
                    <div className="col-6" style={{ height: "100vh" }}>
                        <img src={logo} width="100%" height="100%" alt="AyaMedica-Logo" />
                    </div>
                    <div className="col-6 d-flex">
                        { //Check Condition==> Has The User An Account?
                            haveAccount
                            ?//Yes
                                <form method= "POST" action= "#" style= {{width: "100%"}} className="Login-Form row g-3 m-auto">
                                    <div className= "d-flex flex-column align-items-center" >
                                        <h2 style= {{fontWeight: "bold"}}>Welcome <span style={{ color: '#18BAB4' }}>Back</span></h2>
                                        <p style= {{fontWeight: "bold", fontSize: "13px"}}>Don't have an account?<a  href= "#" style={{ color: '#18BAB4' }} onClick= {(e)=> goRegister(e)}>Sign up</a></p>
                                    </div>
                                    <div className= "d-flex flex-column align-items-center">
                                        <div className="col-8 my-2">
                                            <input type="text" className="form-control" placeholder="User Name" value= {username} name= "Username" onKeyDown={(e)=>handelLoginInputs(e)}/>
                                        </div>
                                        <div className="col-8 my-2">
                                            <input type="password" className="form-control" placeholder="Password" value={password} name= "Password" onKeyDown={(e)=>handelLoginInputs(e)}/>
                                        </div>
                                        <div className="col-8 mb-4 form-check">
                                            <input className="form-check-input" type="checkbox"  id="RememberMe" onClick={(e)=> setRemeberMe(e.target.checked)}/>
                                            <label className="form-check-label text-muted" htmlFor="RememberMe">
                                                Remember me 
                                            </label>
                                        </div>
                                        <div className="col-8 mt-4">
                                            <button type="submit" className="btn p-2" style={{
                                                backgroundColor: '#18BAB4',
                                                // backgroundImage: `url(${icon})`,
                                                color: '#fff',
                                                width: '100%',
                                            }} onClick= {handelLogin}>
                                                LOG IN &nbsp;
                                                <img src= {icon} alt= "Ayamedica Icon" id= "loginFormIcon" width="30px" height="30px"/>
                                                </button>
                                        </div>
                                        <div className="col-8 mb-4">
                                            <button type="submit" className="btn" style={{
                                                backgroundColor: '#fff',
                                                color: '#18BAB4',
                                                width: '100%'
                                            }}>Forget Password?</button>
                                        </div>
                                        <div className="col-8 mt-4" >
                                            <p style= {{color: "grey"}}> by signing in you agree to our <span style={{color: "rgb(24, 186, 180)"}}>privacy policy</span></p>
                                        </div>
                                    </div>
                                </form>
                            ://No (Signup)
                            <Signup setHaveAccount= {setHaveAccount}  />
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;
