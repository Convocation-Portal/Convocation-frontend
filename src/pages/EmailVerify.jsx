import React, { useEffect, useState } from "react";
import { resendHandler, verifyEmail } from "../components/httpRequest";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import classes from "../style/Login.module.css";

const EmailVerify = () => {
    const [timer, setTimer] = useState(new Date().getTime() + 5 * 60 * 1000);
    const [second, setSecond] = useState(new Date().getTime());
    const [input, setInput] = useState({ otp: "" });
    const redirect = useNavigate();
    useEffect(() => {
        setSecond(new Date().getTime());
        const interval = setInterval(() => {
            setSecond((t) => t + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);
    const minutes = Math.max(Math.floor((timer - second) / 60000), 0);
    const remainingSeconds = Math.max(
        Math.floor((timer - second) / 1000) % 60,
        0
    );

    return (
        <div className={classes.container}>
            <div>
                <h1>Email verify</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        verifyEmail(input.otp, redirect);
                    }}
                    className={classes.form}
                >
                    <Input
                        label="OTP"
                        name="otp"
                        type="number"
                        value={input.otp}
                        set={setInput}
                        placeholder="Type your OTP"
                    />
                    <div className={classes.formbuttons}>
                        <button className={classes.submitbutton} type="submit">
                            Submit
                        </button>
                    </div>
                    <div className={classes.timer}>
                        <div>
                            OTP is valid for{" "}
                            <span
                                style={
                                    minutes === 0 && remainingSeconds < 10
                                        ? { color: "red" }
                                        : {}
                                }
                            >
                                0{minutes}:{remainingSeconds < 10 ? "0" : ""}
                                {remainingSeconds}
                            </span>
                        </div>
                        <span
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={resendHandler.bind(null, setTimer)}
                        >
                            resend OTP
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmailVerify;
