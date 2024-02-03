import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import headingpic from "./assets/heading.png";
import "../style/Header.css";

const Header = () => {
    return (
        <>
            <div className="Header">
                <div className="picicons">
                    <img className="headingpic" src={headingpic} alt="" />
                    <div className="headingicons">
                        <AiOutlineLinkedin />
                        <AiOutlineFacebook />
                        <LiaTwitterSquare />
                        <FaInstagram />
                    </div>
                </div>
                <div className="quicklinks">
                    <a id="quicklinktext" href="">
                        Home
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
