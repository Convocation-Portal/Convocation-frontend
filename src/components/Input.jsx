/* eslint-disable react/prop-types */
import React from "react";
import style from "../style/Input.module.css";

const Input = (props) => {
  const changeHandler = (e) => {
    props.set((t) => ({ ...t, [e.target.name]: e.target.value }));
  };
  return (
    <div className={style.inpcon}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={style.inp}
        onChange={props.disabled ? () => {} : changeHandler}
        {...props}
      />
    </div>
  );
};

export default Input;
