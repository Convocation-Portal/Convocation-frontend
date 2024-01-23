//installed eslint. just run this in terminal "npm run lint"
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin, Register, Student, Login } from "./pages";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

// create other routes as required
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            { index: true, element: <Register /> },
            { path: "/admin", element: <Admin /> },
            { path: "/student", element: <Student /> },
            { path: "/login", element: <Login /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
