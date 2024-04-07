import React, { useState } from "react";
import { MdOutlineKey } from "react-icons/md";
import style from "../style/Login.module.css";
import { login } from "../components/httpRequest";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
    const redirect = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        login(formData, redirect);
    };

    const handleFormReset = () => {
        setFormData({
            email: "",
            password: "",
        });
    };

    return (
        <div className={style.container}>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit} className={style.form}>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Type your email address"
                        value={formData.email}
                        set={setFormData}
                    />
                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        value={formData.password}
                        set={setFormData}
                    />
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className={style.formbuttons}>
                        <button className={style.submitbutton} type="submit">
                            <MdOutlineKey /> Login
                        </button>
                        <button
                            className={style.resetbutton}
                            type="button"
                            onClick={handleFormReset}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
