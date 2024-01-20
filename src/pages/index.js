import Login from "./Login";
import Admin from "./Admin";
import Register from "./Registerpageone";
import Student from "./Student";
import React from 'react'
import Registerpageone from "./Registerpageone";

function index() {
  return (
    <div> <Registerpageone/>  </div>
  )
}

export default index

export { Login, Admin, Register, Student };
