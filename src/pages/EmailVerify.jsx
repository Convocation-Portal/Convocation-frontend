import React, { useEffect, useState } from "react";
import { resendHandler, verifyEmail } from "../components/httpRequest";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {
    const [timer, setTimer] = useState(new Date().getTime() + 5 * 60 * 1000);
    const [second, setSecond] = useState(new Date().getTime());
    const [otp, setOtp] = useState("");
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
        <div className="login-container">
            <div>
                <h1>Email verify</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        verifyEmail(otp, redirect);
                    }}
                    className="login-form"
                >
                    <div className="inpcon">
                        <label htmlFor="OTP">OTP</label>
                        <input
                            className="inp"
                            id="username"
                            type="number"
                            name="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Type your OTP"
                        />
                    </div>
                    <div className="formbuttons">
                        <button id="submitbutton" type="submit">
                            Submit
                        </button>
                    </div>
                    <div className="formbuttons">
                        <div className="timer">
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
                            </span>{" "}
                            <span
                                style={{ color: "blue", cursor: "pointer" }}
                                onClick={resendHandler.bind(null, setTimer)}
                            >
                                resend OTP
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmailVerify;
