import React from "react";
import Style from "./Features.module.css";
import IconChat from "./img/icon-chat.png";
import IconMoney from "./img/icon-money.png";
import IconSecurity from "./img/icon-security.png";

export default function Features() {
    return (
        <section className={Style.features}>
            <h2 className={Style.srOnly}>Features</h2>
            <div className={Style.featureItem}>
                <img
                    src={IconChat}
                    alt="Chat Icon"
                    className={Style.featureIcon}
                />
                <h3 className={Style.featureItemTitle}>You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </div>
            <div className={Style.featureItem}>
                <img
                    src={IconMoney}
                    alt="Chat Icon"
                    className={Style.featureIcon}
                />
                <h3 className={Style.featureItemTitle}>More savings means higher rates</h3>
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            </div>
            <div className={Style.featureItem}>
                <img
                    src={IconSecurity}
                    alt="Chat Icon"
                    className={Style.featureIcon}
                />
                <h3 className={Style.featureItemTitle}>Security you can trust</h3>
                <p>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </p>
            </div>
        </section>
    );
}  