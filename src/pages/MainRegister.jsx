import React, { useState } from "react";
import { ErrorMessage, register } from "../components/httpRequest";
import { MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import classes from "../style/Login.module.css";

const MainRegister = () => {
    const redirect = useNavigate();
    const [detail, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    const submitHandler = (e) => {
        e.preventDefault();
        if (
            detail.name === "" ||
            detail.email === "" ||
            detail.password === ""
        ) {
            ErrorMessage("Please fill all the fields");
            return;
        }
        register(detail, redirect);
    };
    return (
        <div className={classes.container}>
            <div>
                <h1>Register</h1>
                <form onSubmit={submitHandler} className={classes.form}>
                    <Input
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        value={detail.name}
                        set={setDetails}
                    />
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={detail.email}
                        set={setDetails}
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={detail.password}
                        set={setDetails}
                    />
                    <div className={classes.formbuttons}>
                        <button className={classes.submitbutton} type="submit">
                            <MdOutlineKey />
                            Register
                        </button>
                        <button className={classes.resetbutton}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainRegister;
