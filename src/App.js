//installed eslint. just run this in terminal "npm run lint"
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Login,
    MainRegister,
    Home,
    ForgotPassword,
    Success,
    Failure,
    EmailVerify,
} from "./pages";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthProvider } from "./store/Auth";

// create other routes as required
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <div className="middle">
                    <Outlet />
                </div>
                <Footer />
            </>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "/register", element: <MainRegister /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
            { path: "/login", element: <Login /> },
            { path: "/success", element: <Success /> },
            { path: "/failure", element: <Failure /> },
            { path: "/verify-email", element: <EmailVerify /> },
        ],
    },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
