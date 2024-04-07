import React, { useState } from "react";
// import "../style/Registrationpageone.css";
import classes from "../style/Register.module.css";
import { useAuth } from "../store/Auth";
import Input from "./Input";
import Select from "./Select";
import classes2 from "../style/Login.module.css";
import { ErrorMessage } from "./httpRequest";

const program = {
    BTech: "BTech",
    "Integrated BTech+MTech": "Integrated BTech+MTech",
    BArch: "BArch",
};
const department = {
    CSE: "Computer Science and Engineering",
    Civil: "Civil",
    Chemical: "Chemical",
    EC: "Electronics",
    EE: "Electrical",
    Mechanical: "Mechanical",
    MNC: "Mathematics and Computing",
    EP: "Engineering Physics",
    MS: "Material Science",
};

// eslint-disable-next-line react/prop-types
const Registerpageone = ({ set, setInput }) => {
    const { user } = useAuth();
    const [detail, setDetail] = useState({
        email: user.email,
        nameeng: user.name,
        namehin: "",
        rollnum: "",
        program: "",
        department: "",
    });

    const resetHandler = (e) => {
        e.preventDefault();
        setDetail({
            email: user.email,
            nameeng: user.name,
            namehin: "",
            rollnum: "",
            program: "",
            department: "",
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (
            !detail.email ||
            !detail.nameeng ||
            !detail.namehin ||
            !detail.rollnum ||
            !detail.program
        ) {
            // alert("Please fill all the fields");
            ErrorMessage("Please fill all the fields");
            return;
        }
        if (detail.program !== "BArch" && !detail.department) {
            ErrorMessage("Please fill all the fields");
            return;
        }
        set(true);
        setInput(detail);
    };
    return (
        <div className={classes.container}>
            <div>
                <form className={classes.form}>
                    <Input
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="type your email address"
                        value={detail.email}
                        disabled={true}
                    />
                    <Input
                        name="nameeng"
                        label="Name (English)"
                        type="text"
                        placeholder="type your name is english"
                        value={detail.nameeng}
                        disabled={true}
                    />

                    <Input
                        name="namehin"
                        label="Name (Hindi)"
                        type="text"
                        placeholder="type your name is हिन्दी"
                        value={detail.namehin}
                        set={setDetail}
                    />

                    <Input
                        name="rollnum"
                        label="Roll Number"
                        type="text"
                        placeholder="type your roll number"
                        value={detail.rollnum}
                        set={setDetail}
                    />
                    <Select
                        name="program"
                        label="Program"
                        options={program}
                        value={detail.program}
                        set={setDetail}
                    />
                    <Select
                        name="department"
                        label="Department"
                        options={department}
                        value={detail.department}
                        set={setDetail}
                    />

                    <div className={classes2.formbuttons}>
                        <button
                            className={classes2.submitbutton}
                            onClick={submitHandler}
                        >
                            NEXT
                        </button>
                        <button
                            className={classes2.resetbutton}
                            onClick={resetHandler}
                        >
                            RESET
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registerpageone;
