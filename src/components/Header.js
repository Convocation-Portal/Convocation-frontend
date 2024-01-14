import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div>Header here</div>
            <Outlet />
            {/*Outlet ke bina header ke niche wala nhi aayega mat htana*/}
        </>
    );
};

export default Header;
