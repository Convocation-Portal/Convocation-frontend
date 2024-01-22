import React, { useState } from "react";
import blackellipsenew from '../components/assets/blackellipsenew.JPEG'
import blueellipsenew from '../components/assets/blueellipsenew.PNG'
// import Header from "../components/Header.js";
import "../style/Register.css";
import { MdOutlineKey } from "react-icons/md";
const Register = () => {
    const [sizeData, setSizedata] = useState({
        jacketsize: "",
        capSize: "",
    });
    const [checkbox1, setcheckbox1] = useState(false);
    const [checkbox2, setcheckbox2] = useState(false);
    const [feeDepositfile, setFeeDepositFile] = useState(null);
    const [idProofFile, setIdProofFile] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSizedata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Jacket Size:", sizeData.jacketSize);
        console.log("Cap Size", sizeData.capSize);
    }
    const handleCheckboxChange = (checkboxNo) => {
        if (checkboxNo === 1) {
            setcheckbox1(true);
            setcheckbox2(false);
        }
        else if (checkboxNo === 2) {
            setcheckbox1(false);
            setcheckbox2(true);
        }
    };
    // const handleFeeFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setFeeDepositFile(file);
    // }
    const handleFeeUpload = () => {
        if (feeDepositfile) {
            console.log("Uploading file:", feeDepositfile);
        }
        else {
            console.log("No file selected");
        }
    }
    const handleIDProofChange = (event) => {
        const idfile = event.target.files[0];
        setIdProofFile(idfile);
    }
    const handleIdupload = () => {
        if (idProofFile) {
            console.log("Updating file:", idProofFile);
        }
        else {
            console.log("No file selected");
        }
    }
    return <div>
        {/* <Header /> */}
        <div className="mainform"  >
            <div className="headline" >

                <p>
                    Registration for Convocation Program
                </p>
            </div>

            <div className="twodots" >
                <img id="imgone" src={blueellipsenew} alt="" />
                <div className="lineconnect" ></div>
                <img id="imgtwo" src={blackellipsenew} alt="" />
            </div>



            <div className="userform">

                <form onSubmit={handleSubmit}>

                    <div className="selectopt" >

                        <div className="headingg" >Convocation Dress:</div>

                    </div>
                    <div className="inpcon" >
                        <label id="jaskaran" htmlFor="email">Himachali Cap-Size no.</label>
                        <input className="inp"
                            id="No"
                            type="No"
                            placeholder="type your cap size"
                            name="Capsize"
                            value={sizeData.capSize}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="inpcon" >
                        <label htmlFor="namehin"> Himachali JAcket-Size No.</label>
                        <input type="text"
                            placeholder="type your jacket size"
                            className="inp"
                            name="JacketSize"
                            id="No"
                            value={sizeData.jacketsize}
                            onChange={handleInputChange} />
                    </div>
                    <div className="details">
                        <p className="headingg" >Dinner:</p>
                        <br></br>
                        <div className="opt">
                            <label className="check"  >
                                <input id="checkboxx"
                                    type="checkbox"
                                    checked={checkbox1}
                                    onChange={() => handleCheckboxChange(1)}
                                ></input>
                                Whether Dinner on Rehearsal Day and breakfast on Convocation Day is Required?
                            </label>
                            <label className="check">

                                <input type="checkbox" id="checkboxx"
                                    checked={checkbox2}
                                    onChange={() => handleCheckboxChange(2)}></input>
                                Whether Stay in the Institute Hostel on Rehearsal Night required?

                            </label>
                            <p>In view of limited Hostel facilities, the stay arrangements for Parents/ Guardians, if accompanying, may be done by the participants themselves at their own level</p>

                        </div>
                    </div>


                    <div className="upload" >

                        <div className="text">Upload Photo Copy of Fee Deposited Through SBI Collect.</div>
                        {/* <input type="file" onChange={handleFeeFileChange} accept="image/*"></input> */}
                        <button id="uploadphoto"
                            onClick={handleFeeUpload}
                        >Upload</button>

                    </div>

                    <div className="upload" >

                        <div className="text">Please Upload Valid ID Proof</div>
                        {/* <input type="file" onChange={handleIDProofChange} accept="image/*"></input> */}
                        <button id="uploadphoto"
                            onClick={handleIdupload}
                        >Upload</button>




                    </div>

                    <div className="formbuttons" >
                        <button id="registerbutton" >
                            <MdOutlineKey /> Register</button>

                        <button id="resetbutton"  >RESET</button>
                    </div>

                </form>

            </div>

        </div>
    </div>

};

export default Register;
