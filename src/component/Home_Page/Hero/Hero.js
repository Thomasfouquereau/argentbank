import React from "react";
import Style from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={Style.hero}>
            <section className={Style.heroContent}>
                <h2 className={Style.srOnly}>Promoted Content</h2>
                <p className={Style.subtitle}>No fees.</p>
                <p className={Style.subtitle}>No minimum deposit.</p>
                <p className={Style.subtitle}>High interest rates.</p>
                <p className={Style.text}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}