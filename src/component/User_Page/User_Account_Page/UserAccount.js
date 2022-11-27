import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Style from "./UserAccount.module.css";

export default function UserAccount() {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/user/transaction', {replace: true}), [navigate]);
    return (
        <main className={Style.mainBgDark}>
            <section className={Style.account}>
                <div className={Style.accountContentWrapper}>
                    <h3 className={Style.accountTitle}>Argent Bank Checking (x8349)</h3>
                    <p className={Style.accountAmount}>$2,082.79</p>
                    <p className={Style.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={Style.accountContentWrapperCta}>
                    <button className={Style.transactionButton} onClick={handleOnClick}>View transactions</button>
                </div>
            </section>
            <section className={Style.account}>
                <div className={Style.accountContentWrapper}>
                    <h3 className={Style.accountTitle}>Argent Bank Savings (x6712)</h3>
                    <p className={Style.accountAmount}>$10,928.42</p>
                    <p className={Style.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={Style.accountContentWrapperCta}>
                    <button className={Style.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={Style.account}>
                <div className={Style.accountContentWrapper}>
                    <h3 className={Style.accountTitle}>Argent Bank Credit Card (x8349)</h3>
                    <p className={Style.accountAmount}>$184.30</p>
                    <p className={Style.accountAmountDescription}>Current Balance</p>
                </div>
                <div className={Style.accountContentWrapperCta}>
                    <button className={Style.transactionButton}>View transactions</button>
                </div>
            </section>
        </main>
    );
}
