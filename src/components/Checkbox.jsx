/* eslint-disable react/prop-types */
import React from "react";

const Checkbox = (props) => {
    const changeHandler = () => {
        props.set((t) => {
            return { ...t, [props.name]: !props.checked };
        });
    };
    return (
        <div
            id={props.id}
            style={{
                display: "flex",
                alignItems: "baseline",
                gap: "10px",
                fontSize: "min(16px, 2vw)",
            }}
        >
            <input type="checkbox" {...props} onChange={changeHandler}></input>
            <label className="check" htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    );
};

export default Checkbox;
