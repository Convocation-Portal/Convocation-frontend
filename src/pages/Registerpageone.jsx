import React from "react";
import { FaUser } from "react-icons/fa";
import "./Registrationpageone.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import blueellipsenew from '../components/assets/blueellipsenew.PNG';
import blackellipsenew from '../components/assets/blackellipsenew.JPEG'


const Registerpageone = () => {
    return <div>
        <Header/>

        <div className="mainform"  >
            <div className="headline">
                        <FaUser/>
                    <p>
                        Registration for Convocation Program
                    </p>
            </div>

            <div className="twodots" >
                    <img id="imgone"  src={blueellipsenew} alt="" />
                    <div className="lineconnect" ></div>
                    <img  id="imgtwo" src={blackellipsenew} alt="" />
            </div>



        <div className="userform">

            <form  >
                
                <div className="selectopt" >
                    
                       <div>Timestamp</div>
                        <select id="Timestamp" name= "Timestamp">
                            <option value="option1">Choose Timestamp</option>
                            <option value="option1">Option2</option>
                            <option value="option1">Option3</option>
                            <option value="option1">Option4</option>
                            <option value="option1">Option5</option>
                        </select>
                </div>
                    <div className="inpcon" >
                        <label id="jaskaran" htmlFor="email">Email</label>
                    <input className="inp" id="email" type="text" placeholder="type your email address"  name=""  />
                    </div>
                    <div className="inpcon" >
                    <label htmlFor="nameeng">Name (English)</label>
                    <input type="text" className="inp" placeholder="type your name is english"  name="" id="nameeng" />
                    </div>
                    <div className="inpcon" >
                    <label htmlFor="namehin">Name (Hindi)</label>
                    <input type="text" placeholder="type your name is हिन्दी"  className="inp" name="" id="namehin" />
                    </div>
                    <div className="inpcon" >
                    <label htmlFor="rollnum">Roll Number</label>
                    <input type="text" placeholder="type your roll number"  className="inp" name="" id="rollnum" />
                    </div>
                <div className="selectopt" >

                    <div>Program</div>
                        <select id="Program" name= "Program"aria-placeholder="Choose your Program" >
                            <option value="option1">Choose your Program</option>
                            <option value="option1">Option2</option>
                            <option value="option1">Option3</option>
                            <option value="option1">Option4</option>
                            <option value="option1">Option5</option>
                        </select>

               </div>

               <div className="selectopt" >

                <div>Department</div>
                <select id="Department" name= "Department"  >
                    <option value="option1">Choose your Department</option>
                    <option value="option1">Option2</option>
                    <option value="option1">Option3</option>
                    <option value="option1">Option4</option>
                    <option value="option1">Option5</option>
                </select>


                </div>

                <div className="formbuttons" >
                    <button id="nextbutton" >NEXT</button>
                    <button id="resetbutton"  >RESET</button>
                </div>

             </form>

          </div>

        </div>

        <Footer/>

    </div>;

};

export default Registerpageone;
     