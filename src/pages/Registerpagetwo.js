import React, { useState } from "react";
import blackellipsenew from "../components/assets/blackellipsenew.JPEG";
import blueellipsenew from "../components/assets/blueellipsenew.PNG";
import "../style/Registertwo.css";
import { MdOutlineKey } from "react-icons/md";
import useDriverPicker from "react-google-drive-picker";
import { google_client_id, google_api_key } from "../constant";
import { FaUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Registerpagetwo = ({ set, input, setInput }) => {
    const [createPicker] = useDriverPicker();
    const config = {
        clientId: google_client_id,
        developerKey: google_api_key,
        viewId: "DOCS",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
    };

    const submitHandler = (e) => {
        e.preventDefault();
        set(false);
        setInput((t) => {
            return { ...t, input };
        });
    };

    const [details, setDetails] = useState({
        capSize: "",
        jacketSize: "",
        dinner: false,
        stay: false,
        fee: "",
        idProof: "",
    });
    return (
        <div>
            <div className="mainform">
                <div className="headline">
                    <p>
                        <FaUser />
                        Registration for Convocation Program
                    </p>
                </div>

                <div className="twodots">
                    <img id="imgone" src={blueellipsenew} alt="" />
                    <div className="lineconnect"></div>
                    <img id="imgtwo" src={blackellipsenew} alt="" />
                </div>

                <div className="userform">
                    <form>
                        <div className="selectopt">
                            <div className="headingg">Convocation Dress:</div>
                        </div>
                        <div className="inpcon">
                            <label id="jaskaran" htmlFor="email">
                                Himachali Cap-Size no.
                            </label>
                            <input
                                className="inp"
                                id="No"
                                type="No"
                                placeholder="type your cap size"
                                name="Capsize"
                                value={details.capSize}
                                onChange={(e) =>
                                    setDetails((t) => ({
                                        ...t,
                                        capSize: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <div className="inpcon">
                            <label htmlFor="namehin">
                                {" "}
                                Himachali Jacket-Size No.
                            </label>
                            <input
                                type="text"
                                placeholder="type your jacket size"
                                className="inp"
                                name="JacketSize"
                                id="No"
                                value={details.jacketSize}
                                onChange={(e) =>
                                    setDetails((t) => ({
                                        ...t,
                                        jacketSize: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="details">
                            <p className="headingg">Dinner:</p>
                            <br></br>
                            <div className="opt">
                                <label className="check">
                                    <input
                                        id="checkboxx"
                                        type="checkbox"
                                        checked={details.dinner}
                                        onChange={() =>
                                            setDetails((t) => ({
                                                ...t,
                                                dinner: !details.dinner,
                                            }))
                                        }
                                    ></input>
                                    Whether Dinner on Rehearsal Day and
                                    breakfast on Convocation Day is Required?
                                </label>
                                <label className="check">
                                    <input
                                        type="checkbox"
                                        id="checkboxx"
                                        checked={details.stay}
                                        onChange={() =>
                                            setDetails((t) => ({
                                                ...t,
                                                stay: !details.stay,
                                            }))
                                        }
                                    ></input>
                                    Whether Stay in the Institute Hostel on
                                    Rehearsal Night required?
                                </label>
                                <p>
                                    In view of limited Hostel facilities, the
                                    stay arrangements for Parents/ Guardians, if
                                    accompanying, may be done by the
                                    participants themselves at their own level
                                </p>
                            </div>
                        </div>

                        <div className="upload">
                            <div className="text">
                                Upload Photo Copy of Fee Deposited Through SBI
                                Collect.
                            </div>
                            <button
                                id="uploadphoto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    createPicker({
                                        ...config,
                                        callbackFunction: (data) => {
                                            if (data.action === "picked") {
                                                setDetails((t) => {
                                                    return {
                                                        ...t,
                                                        fee: data.docs[0].url,
                                                    };
                                                });
                                            }
                                        },
                                    });
                                }}
                            >
                                Upload
                            </button>
                        </div>

                        <div className="upload">
                            <div className="text">
                                Please Upload Valid ID Proof
                            </div>
                            <button
                                id="uploadphoto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    createPicker({
                                        ...config,
                                        callbackFunction: (data) => {
                                            if (data.action === "picked") {
                                                setDetails((t) => {
                                                    return {
                                                        ...t,
                                                        idProof:
                                                            data.docs[0].url,
                                                    };
                                                });
                                            }
                                        },
                                    });
                                }}
                            >
                                Upload
                            </button>
                        </div>

                        <div className="formbuttons">
                            <button id="registerbutton" onClick={submitHandler}>
                                <MdOutlineKey /> Register
                            </button>

                            <button id="resetbutton">RESET</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registerpagetwo;
