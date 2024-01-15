//installed eslint. just run this in terminal "npm run lint"
import React from "react";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Admin, Register, Student } from "./pages";

// create other routes as required
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            { path: "register", element: <Register /> },
            { path: "admin", element: <Admin /> },
            { path: "student", element: <Student /> },
            { path: "login", element: <Login /> },
        ],
    },
]);

function App() {
   
    return <>
    <p>Hello jaskaran ji </p>
     <RouterProvider router={router} />;
    </>
}

export default App;
