import React, { useEffect, useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import headingpic from "./assets/NITH_LOGO.webp";
import "../style/Header.css";
import Cookies from "js-cookie";

const Header = () => {
    const [isloggedin, setIsLoggedIn] = useState(false); // Initialize as false
    // const callme = () =>{
    //     let temp = Cookies.get("token")
    //     setisloggedin(temp);
    // }
    // callme();
    useEffect(() => {
        const temp = Cookies.get("token");
        setIsLoggedIn(!!temp); // !!temp will convert temp to a boolean
    }, [isloggedin]);
    

    const handleLogout = () => {
        // Delete the cookie here
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Replace 'yourCookieName' with the name of your cookie
      };



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
                    {isloggedin &&  <a href="/" onClick={handleLogout}>Logout</a>}
                </div>
            </div>
        </>
    );
};

export default Header;
