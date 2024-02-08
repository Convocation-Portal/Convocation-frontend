import React from "react";
import "../style/Footer.css";

const Footer = () => {
    const date = new Date();
    return (
        <div className="Footer">
            <div className="FooterText">
                © {date.getFullYear()} All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
