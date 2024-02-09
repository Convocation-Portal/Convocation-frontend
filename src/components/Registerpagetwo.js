import React, { useState } from "react";
import { MdOutlineKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Upload from "./Upload";
import Checkbox from "./Checkbox";
import classes from "../style/Register.module.css";
import classes2 from "../style/Login.module.css";

// eslint-disable-next-line react/prop-types
const Registerpagetwo = ({ set, input, setInput }) => {
    const redirect = useNavigate();

    const [details, setDetails] = useState({
        capSize: "",
        jacketSize: "",
        dinner: false,
        stay: false,
        fee: "",
        idProof: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        set(false);
        redirect("/");
        setInput((t) => {
            return { ...t, input };
        });
    };

    const resetHandler = (e) => {
        e.preventDefault();
        setDetails({
            capSize: "",
            jacketSize: "",
            dinner: false,
            stay: false,
            fee: "",
            idProof: "",
        });
    };

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.form}>
                    <form>
                        <div className={classes.part}>
                            <div className={classes.headingg}>
                                Convocation Dress:
                            </div>

                            <Input
                                name="capsize"
                                label="Himachali Cap-Size no."
                                placeholder="type your cap size"
                                type="No"
                                value={details.capSize}
                                set={setDetails}
                            />
                            <Input
                                name="jacketSize"
                                label="Himachali Jacket-Size No."
                                placeholder="type your jacket size"
                                type="text"
                                value={details.jacketSize}
                                set={setDetails}
                            />
                        </div>

                        <div className={classes.part}>
                            <div className={classes.headingg}>Dinner:</div>
                            <Checkbox
                                id={classes.checkboxx}
                                name="dinner"
                                checked={details.dinner}
                                set={setDetails}
                                label="Whether Dinner on Rehearsal Day and
                                    breakfast on Convocation Day is Required?"
                            />
                            <Checkbox
                                id={classes.checkboxx}
                                checked={details.stay}
                                name="stay"
                                set={setDetails}
                                label="Whether Stay in the Institute Hostel on
                                    Rehearsal Night required?"
                            />

                            <p>
                                In view of limited Hostel facilities, the stay
                                arrangements for Parents/ Guardians, if
                                accompanying, may be done by the participants
                                themselves at their own level
                            </p>
                        </div>
                        <Upload
                            label="Upload Photo Copy of Fee Deposited Through SBI Collect."
                            set={(url) =>
                                setDetails((t) => ({ ...t, fee: url }))
                            }
                        />
                        <Upload
                            label="Please Upload Valid ID Proof"
                            set={(url) =>
                                setDetails((t) => ({ ...t, idProof: url }))
                            }
                        />

                        <div className={classes2.formbuttons}>
                            <button
                                className={classes2.submitbutton}
                                onClick={submitHandler}
                            >
                                <MdOutlineKey /> Register
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
        </div>
    );
};

export default Registerpagetwo;
