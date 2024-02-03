import React, { useState } from "react";
import { register } from "../components/httpRequest";
import { MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
            alert("Please fill all the fields");
            return;
        }
        register(detail, redirect);
    };
    return (
        <div className="login-container">
            <div>
                <h1>Register</h1>
                <form onSubmit={submitHandler} className="login-form">
                    <div className="inpcon">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            onChange={(e) =>
                                setDetails({ ...detail, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="inpcon">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            onChange={(e) =>
                                setDetails({ ...detail, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="inpcon">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) =>
                                setDetails({
                                    ...detail,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="formbuttons">
                        <button id="submitbutton" type="submit">
                            <MdOutlineKey />
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainRegister;
