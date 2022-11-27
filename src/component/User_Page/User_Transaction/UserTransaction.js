import React from "react";
import Style from "./UserBalance.module.css";
import arrow from "./addon/icon arrow.svg";

export default function UserTransaction() {
    return (
        <main className={Style.transaction}>

            <table className={Style.transactionContainer} >

                <thead className={Style.headerArrays}>
                    <tr className={Style.nameColumn}>
                        <th className={Style.tableee}>.</th>
                        <th className={Style.tableHeaderItem}>date</th>
                        <th className={Style.tableHeaderItem}>description</th>
                        <th className={Style.tableHeaderItem}>amount</th>
                        <th className={Style.tableHeaderItem}>balance</th>
                    </tr>
                </thead>

                <tbody className={Style.arrays}>
                    <tr className={Style.lineItem}>
                        <th className={Style.tableIcon}><img src={arrow} alt="arrow" className={Style.icon} /></th>
                        <th className={Style.tableItem}>june 20th, 2022</th>
                        <th className={Style.tableItem}>Payment to Netfthx</th>
                        <th className={Style.tableItem}>$ 12.99</th>
                        <th className={Style.tableItem}>$ 2,069.78</th>
                    </tr>
                </tbody>

            </table>

        </main>
    );
}