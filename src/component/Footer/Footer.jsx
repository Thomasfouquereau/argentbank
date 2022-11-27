import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={Style.Footer}>
        <p className={Style.FooterContent}>Copyright 2020 Argent Bank</p>
        </footer>
    );
    }