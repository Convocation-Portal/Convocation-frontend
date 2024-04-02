import React from "react";

import "../style/Admin.css";

const Adminnn = () => {
  const data = {
    Convocation_Dress: "White suit",
    eng_name: "Jaskaran Singh",
    hindi_name: "जसकरण",
    rollno: "21BCS104",
    program: " Convocation Event",
    department: " Computer Science & Engineering",
    cap_size: " 54B",
    jacket_size: "32A",
    dinner: "Yes",
    stay: "Yes",
    img: "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
  };

  return (
    <div className="MainContainerrr">
      <div className="Formm">
        <div className="textt">Enter the Roll no</div>
        <div className="inputt">
          <input type="text" name="" id="" />
          <button>Search</button>
        </div>
      </div>
      <div className="StudentDetailsContainer">
        <div className="container">
          <div id="entity">
            <div>Name (English)</div>
            <div>{data.eng_name}</div>
          </div>
          <div id="entity">
            <div>Name (Hindi)</div>
            <div>{data.hindi_name}</div>
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
            <div>Convocation Dress</div>
            <div>{data.Convocation_Dress}</div>
          </div>
          <div id="entity">
            <div>Cap Size</div>
            <div>{data.cap_size}</div>
          </div>
          <div id="entity">
            <div>Jacket Size</div>
            <div>{data.jacket_size}</div>
          </div>
          <div id="entity">
            <div>Dinner</div>
            <div>{data.dinner}</div>
          </div>
          <div id="entity">
            <div>
              Whether Stay in the Institute Hostel on Rehearsal Night required?{" "}
            </div>
            <div>{data.stay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminnn;
