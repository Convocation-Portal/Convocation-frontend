import React, { useState } from "react";
import { forgotPassword } from "../components/httpRequest";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="login-container">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    forgotPassword(email);
                }}
            >
                <div className="inpcon">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="formbuttons">
                    <button id="resetbutton" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;
