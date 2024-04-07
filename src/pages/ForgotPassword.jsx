import React, { useState } from "react";
import { forgotPassword } from "../components/httpRequest";
import Input from "../components/Input";
import classes from "../style/Login.module.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [input, setInput] = useState({ email: "" });
    const redirect = useNavigate();

    return (
        <div className={classes.container}>
            <div>
                <form
                    className={classes.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        forgotPassword(input.email, redirect);
                    }}
                >
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={input.email}
                        set={setInput}
                        placeholder="Enter your email"
                    />

                    <div className={classes.formbuttons}>
                        <button className={classes.submitbutton} type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
