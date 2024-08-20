import React from "react";

const students = [
  {
    id: 1,
    name: "Jaskaran",
    rollno: "21bcs104",
    program: "B.Tech",
    department: "CSE",
    capsize: "32",
    jacketsize: "11",
    dinner: "Yes",
    stay: "No",
  },
  {
    id: 2,
    name: "Vaishali",
    rollno: "21bcs109",
    program: "B.Tech",
    department: "CSE",
    capsize: "31",
    jacketsize: "10",
    dinner: "No",
    stay: "Yes",
  },
  // Add more students here
];

const StudentTable = () => {
  return (
    <div className="table-container">
      <style>
        {`
          .table-container {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
          }

          h2 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
          }

          .table-responsive {
            overflow-x: auto; /* Enable horizontal scrolling */
          }

          .responsive-table {
            width: 100%;
            border-collapse: collapse;
            margin: 0 auto;
            font-size: 16px;
            min-width: 800px; /* Ensure a minimum width for the table */
          }

          .responsive-table th,
          .responsive-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
          }

          .responsive-table th {
            background-color: #f2f2f2;
            font-weight: bold;
          }

          .responsive-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          /* For smaller screens */
          @media screen and (max-width: 768px) {
            .responsive-table {
              min-width: 800px; /* Maintain table width for horizontal scrolling */
            }

            .table-container {
              padding: 10px;
            }
          }
        `}
      </style>
      <h2>Convocation Registrations</h2>
      <div className="table-responsive">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Program</th>
              <th>Department</th>
              <th>Cap Size</th>
              <th>Jacket Size</th>
              <th>Dinner</th>
              <th>Stay in Hostel</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.rollno}</td>
                <td>{student.program}</td>
                <td>{student.department}</td>
                <td>{student.capsize}</td>
                <td>{student.jacketsize}</td>
                <td>{student.dinner}</td>
                <td>{student.stay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
