import React, { useState } from "react";
import "../style/Admin.css";
import { useStudent } from "../store/Students";
import { ErrorMessage } from "./httpRequest";

const Admin = () => {
    const students = useStudent();
    const [data, setData] = useState({});
    const [search, setSearch] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        for (let i = 0; i < students.length; i++) {
            if (students[i].rollno == search.toLocaleLowerCase()) {
                setData(students[i]);
                return;
            }
        }
        ErrorMessage("Student not found");
    };

    return (
        <div className="MainContainerrr">
            <div className="Formm">
                <div className="textt">Enter the Roll no</div>
                <form className="inputt" onSubmit={submitHandler}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            {Object.keys(data).length != 0 && (
                <div className="StudentDetailsContainer">
                    <div className="container">
                        <div id="entity">
                            <div>Name (English)</div>
                            <div>{data.name}</div>
                        </div>
                        <div id="entity">
                            <div>Roll no</div>
                            <div>{data.rollno}</div>
                        </div>
                        <div id="entity">
                            <div>Program</div>
                            <div>{data.program}</div>
                        </div>
                        <div id="entity">
                            <div>Department</div>
                            <div>{data.department}</div>
                        </div>
                        <div id="entity">
                            <div>Cap Size</div>
                            <div>{data.capSize}</div>
                        </div>
                        <div id="entity">
                            <div>Jacket Size</div>
                            <div>{data.jacketSize}</div>
                        </div>
                        <div id="entity">
                            <div>Dinner</div>
                            <div>{data.hostelMeal ? "YES" : "NO"}</div>
                        </div>
                        <div id="entity">
                            <div>
                                Whether Stay in the Institute Hostel on
                                Rehearsal Night required?{" "}
                            </div>
                            <div>{data.hostelStay ? "YES" : "NO"}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
