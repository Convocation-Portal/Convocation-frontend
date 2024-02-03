import React, { useState } from "react";
import { MdOutlineKey } from "react-icons/md";
import "../style/Login.css";
import { login } from "../components/httpRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const redirect = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
        <div className="login-container">
            <div>
                <h1>Login</h1>
                <form onSubmit={handleFormSubmit} className="login-form">
                    <div className="inpcon">
                        <label htmlFor="email">Email</label>
                        <input
                            className="inp"
                            id="username"
                            type="text"
                            name="email"
                            placeholder="Type your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="inpcon">
                        <label htmlFor="nameeng">Password</label>
                        <input
                            type="password"
                            className="inp"
                            id="password"
                            name="password"
                            placeholder="Type your password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="formbuttons">
                        <button id="submitbutton" type="submit">
                            <MdOutlineKey /> Login
                        </button>
                        <button
                            id="resetbutton"
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
