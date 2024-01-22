import React, { useState } from "react";
import { MdOutlineKey } from "react-icons/md";
import "../style/Login.css"; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    console.log("Form submitted with data:", formData);
  };

  const handleFormReset = () => {
    setFormData({
      username: "",
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
              name="username"
              placeholder="Type your email address"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="inpcon">
            <label htmlFor="nameeng">Password</label>
            <input
              type="password"
              className="paswrd"
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
            <button id="resetbutton" type="button" onClick={handleFormReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



