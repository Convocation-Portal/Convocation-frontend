import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import headingpic from "./assets/NITH_LOGO.webp";
import "../style/Header.css";

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="picicons">
                    <div className="LOGO">
                        <img className="headingpic" src={headingpic} alt="" />
                        <div className="Names">
                            <h1>राष्ट्रीय प्रौद्योगिकी संस्थान हमीरपुर</h1>
                            <div>(एक राष्ट्रीय महत्व का संस्थान)</div>
                            <h1>National Institute of Technology Hamirpur</h1>
                            <div>(An Institute of National Importance)</div>
                        </div>
                    </div>
                    <div className="headingicons">
                        <AiOutlineLinkedin />
                        <AiOutlineFacebook />
                        <LiaTwitterSquare />
                        <FaInstagram />
                    </div>
                </div>
                <div className="quicklinks">
                    <a id="quicklinktext" href="https://nith.ac.in/">
                        Home
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
