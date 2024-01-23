import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "../style/Registrationpageone.css";
import blueellipsenew from "../components/assets/blueellipsenew.PNG";
import blackellipsenew from "../components/assets/blackellipsenew.JPEG";

// eslint-disable-next-line react/prop-types
const Registerpageone = ({ set, setInput }) => {
    const [detail, setDetail] = useState({
        timestamp: "",
        email: "",
        nameeng: "",
        namehin: "",
        rollnum: "",
        program: "",
        department: "",
    });
    const date = new Date().getFullYear();

    const resetHandler = (e) => {
        e.preventDefault();
        setDetail({
            timestamp: "",
            email: "",
            nameeng: "",
            namehin: "",
            rollnum: "",
            program: "",
            department: "",
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (
            !detail.timestamp ||
            !detail.email ||
            !detail.nameeng ||
            !detail.namehin ||
            !detail.rollnum ||
            !detail.program
        ) {
            alert("Please fill all the fields");
            return;
        }
        if (detail.program !== "BArch" && !detail.department) {
            alert("Please fill all the fields");
            return;
        }
        set(true);
        setInput(detail);
    };
    return (
        <div>
            <div className="mainform">
                <div className="headline">
                    <FaUser />
                    <p>Registration for Convocation Program</p>
                </div>

                <div className="twodots">
                    <img id="imgone" src={blueellipsenew} alt="" />
                    <div className="lineconnect"></div>
                    <img id="imgtwo" src={blackellipsenew} alt="" />
                </div>

                <div className="userform">
                    <form>
                        <div className="selectopt">
                            <div>Timestamp</div>
                            <select
                                id="Timestamp"
                                name="Timestamp"
                                value={detail.timestamp}
                                onChange={(e) => {
                                    setDetail({
                                        ...detail,
                                        timestamp: e.target.value,
                                    });
                                }}
                            >
                                <option value="">Choose Timestamp</option>
                                <option value={`${date}`}>{date}</option>
                            </select>
                        </div>
                        <div className="inpcon">
                            <label id="jaskaran" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="inp"
                                id="email"
                                type="email"
                                placeholder="type your email address"
                                value={detail.email}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inpcon">
                            <label htmlFor="nameeng">Name (English)</label>
                            <input
                                type="text"
                                className="inp"
                                placeholder="type your name is english"
                                id="nameeng"
                                value={detail.nameeng}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        nameeng: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inpcon">
                            <label htmlFor="namehin">Name (Hindi)</label>
                            <input
                                type="text"
                                placeholder="type your name is हिन्दी"
                                className="inp"
                                id="namehin"
                                value={detail.namehin}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        namehin: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="inpcon">
                            <label htmlFor="rollnum">Roll Number</label>
                            <input
                                type="text"
                                placeholder="type your roll number"
                                className="inp"
                                id="rollnum"
                                value={detail.rollnum}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        rollnum: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="selectopt">
                            <div>Program</div>
                            <select
                                id="Program"
                                name="Program"
                                aria-placeholder="Choose your Program"
                                value={detail.program}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        program: e.target.value,
                                    })
                                }
                            >
                                <option value="">Choose your Program</option>
                                <option value="BTech">BTech</option>
                                <option value="Integrated BTech+MTech">
                                    integrated btech+mtech
                                </option>
                                <option value="BArch">BArch</option>
                            </select>
                        </div>

                        <div className="selectopt">
                            <div>Department</div>
                            <select
                                id="Department"
                                name="Department"
                                value={detail.department}
                                onChange={(e) =>
                                    setDetail({
                                        ...detail,
                                        department: e.target.value,
                                    })
                                }
                            >
                                <option>Choose your Department</option>
                                <option value="CSE">
                                    Computer Science and Engineering
                                </option>
                                <option value="Civil">Civil</option>
                                <option value="Chemical">Chemical</option>
                                <option value="EC">Electronics</option>
                                <option value="EE">Electrical</option>
                                <option value="ME">Mechanical</option>
                                <option value="MNC">
                                    Mathematics and Computing
                                </option>
                                <option value="EP">Engineering Physics</option>
                                <option value="MS">Material Science</option>
                            </select>
                        </div>

                        <div className="formbuttons">
                            <button id="nextbutton" onClick={submitHandler}>
                                NEXT
                            </button>
                            <button id="resetbutton" onClick={resetHandler}>
                                RESET
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registerpageone;
