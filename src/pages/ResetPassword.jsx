import React, { useEffect, useState } from "react";
import style from "../style/Login.module.css";
import Input from "../components/Input";
import { changePassword, resentOTP } from "../components/httpRequest";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [input, setInput] = useState({newPassword: "", OTP: ""})
    const [timer, setTimer] = useState(new Date().getTime() + 5 * 60 * 1000);
    const [second, setSecond] = useState(new Date().getTime());
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
        <div className={style.container}>
            <div>
                <h1>Reset Password</h1>
                <form
                    className={style.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        changePassword(input, redirect)}}
                >
                    <Input
                        label="New Password"
                        type="text"
                        name="newPassword"
                        placeholder="Type your Password"
                        value={input.newPassword}
                        set={setInput}
                    />
                    <Input
                        label="OTP"
                        type="text"
                        name="OTP"
                        placeholder="Type your OTP"
                        value={input.OTP}
                        set={setInput}
                    />

                    <div className={style.timer}>
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
                            onClick={resentOTP.bind(null, setTimer)}
                        >
                            resend OTP
                        </span>
                    </div>
                    <div className={style.formbuttons}>
                        <button className={style.submitbutton} type="submit">
                            Change
                        </button>
                        <button className={style.resetbutton} type="button">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
