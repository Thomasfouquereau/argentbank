import React from "react";
import Style from "./UserBalance.module.css";

export default function UserBalance() {
    return (
        <header className={Style.userBalance}>
            <h1 className={Style.balanceName}>Argent Bank Checking (x8349)</h1>
            <span className={Style.balanceAmount}>$ 2,082.79</span>
            <span className={Style.availableBalance} >Available Balance</span>
        </header>
    );
}