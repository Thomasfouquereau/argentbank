import React from "react";
import UserTransaction from "./User_Transaction/UserTransaction";
import UserBalance from "./User_Transaction/UserBalance";
import Style from "./User_Transaction/UserBalance.module.css";

export default function UserIndexTransaction() {
    return (
        <div className={Style.bgColors}>
            <UserBalance />
            <UserTransaction />
        </div>
    );
}