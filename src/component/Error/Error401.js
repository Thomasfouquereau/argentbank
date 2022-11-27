import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Error401.module.css";

export default function Error401() {

    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/login', { replace: true })
    }

    return (
        <div className={Style.Error401}>
            <h1 className={Style.nameError}>You are not authorized on this page</h1>
            <button className={Style.returnBtn} onClick={handelClick}>Go back to login page</button>
        </div>
    );
}