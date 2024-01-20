//installed eslint. just run this in terminal "npm run lint"
import React from "react";

import {Route , Routes} from 'react-router-dom'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin } from "./pages";
import Registerpageone from './pages'
import Student from "./pages";

import Login from "./pages";


// create other routes as required
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Header />,
//         children: [
//             { path: "register", element: <Register /> },
//             { path: "admin", element: <Admin /> },
//             { path: "student", element: <Student /> },
//             { path: "login", element: <Login /> },
//         ],
//     },
// ]);
        <Routes>
            <Route path="/" element={Registerpageone} />
            <Route path="/admin" element={Admin} />
            <Route path="/login" element={Login} />
            <Route path="/register" element={Registerpageone} />
            <Route path="/student" element={Student} />

        </Routes>

function App() {
   
    return <>
    

    <Registerpageone/>

    </>
}

export default App;
