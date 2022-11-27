import React from "react";
import { Link } from "react-router-dom";
import Logo from "./argentBankLogo.png";
import Style from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={Style.mainNav}>
            <Link className={Style.mainNavLogo} to={`/`}>
                <img
                    className={Style.mainNavLogoImage}
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={Style.srOnly}>Argent Bank</h1>
            </Link>
            <div>
                <Link className={Style.mainNavItem} to={`/login`}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}        