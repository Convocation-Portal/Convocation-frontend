/* eslint-disable react/prop-types */
import React from "react";
import classes from "../style/Select.module.css";

const Select = (props) => {
    const changeHandler = (e) => {
        props.set((t) => {
            return { ...t, [props.name]: e.target.value };
        });
    };
    return (
        <div className={classes.selectopt}>
            <div>{props.label}:</div>
            <select {...props} onChange={changeHandler}>
                <option value="">Choose your {props.name}</option>
                {Object.keys(props.options).map((option) => {
                    return (
                        <option key={option} value={option}>
                            {props.options[option]}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
