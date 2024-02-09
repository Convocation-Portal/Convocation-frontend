/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaUser } from "react-icons/fa";
import classes from "../style/Headline.module.css";

const Circle = ({ number, reach }) => {
    return (
        <div
            style={{
                backgroundColor: reach ? "#0f7fc5" : "#000",
                color: "white",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "50%",
            }}
        >
            {number}
        </div>
    );
};

const Headline = ({ page }) => {
    return (
        <div className={classes.container}>
            <div className={classes.headline}>
                <FaUser />
                <p>Registration for Convocation Program</p>
            </div>

            <div className={classes.twodots}>
                <Circle number="1" reach={true} id={classes.imgone} />
                <div
                    style={{
                        backgroundColor: page ? "#0f7fc5" : "#000",
                        width: "30vw",
                        height: "1vh",
                    }}
                ></div>
                <Circle number="2" reach={page} id={classes.imgtwo} />

                <div
                    style={{ backgroundColor: "black" }}
                    className={classes.lineconnect}
                ></div>
            </div>
        </div>
    );
};

export default Headline;
