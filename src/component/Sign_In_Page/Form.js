import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../Store";

export default function Form() {
    const dispatch = useDispatch();
    // const createToken = (token) => {
    //     dispatch(addToken(token));
    // };
    const navigate = useNavigate()
    const [email, setEmail] = useState(localStorage.getItem("email") === null ? "" : localStorage.getItem("email"));
    const [password, setPassword] = useState("");
    const [isCheck, setIsCheck] = useState(false);
    const [error, setError] = useState(false);
    /////////////////////////////////////////////////////localStorage
    if (isCheck === true) {
        localStorage.setItem("email", email);
    } 
    /////////////////////////////////////////////////////localStorage
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleOnClick = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/v1/user/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                const tokenRespose = response.data.body.token;
                // createToken(tokenRespose);
                localStorage.setItem("token", tokenRespose)
                navigate('/user/profile', { replace: true })
            })
            .catch(function (error) {
                console.log(error);
                setError(true);
            });
    }

    return (
        <main className={Style.mainBgBark}>
            <section className={Style.signInContent}>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={handleEmailChange} value={email} />
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={handlePasswordChange} value={password}/>
                    </div>
                    
                    <div className={Style.inputRemember}>
                        <input type="checkbox" id="remember-me" onClick={() => setIsCheck(!isCheck)} />
                        <label htmlFor="remember-me" >Remember me</label>
                    </div>
                    <span className={Style.error}>{error ? "Email or password is incorrect" : ""}</span>
                    <button className={Style.signInButton} onClick={handleOnClick}>Sign In</button>
                </form>
            </section>
        </main>
    );
}