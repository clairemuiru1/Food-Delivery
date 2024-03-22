import React, { useState } from 'react'
import "./Signin.css"
import cross_icon from "../../assets/cross_icon.png"
function Signin({ setShowLogin }) {

    const [currentState, setCurrentState] = useState("login")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "login" ? <></> : <input type='text' placeholder='your name' required />}
                    <input type='email' placeholder='your email' required />
                    <input type='password' placeholder='PASSWORD' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p>By Continuing. I agree to the terms of use & privarcy policy.</p>
                </div>
                {currentState === "login" ?
                    <p>Create a new acount?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p> :
                    <p>Already have an account?<span onClick={()=> setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Signin
