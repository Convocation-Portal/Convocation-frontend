import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Login,
    MainRegister,
    Home,
    ForgotPassword,
    Success,
    Failure,
    EmailVerify,
    ResetPassword
} from "./pages";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthProvider } from "./store/Auth";
import { StudentProvider } from "./store/Students";

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
            {path: "/reset-password", element: <ResetPassword />},
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
            <StudentProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </StudentProvider>
        </AuthProvider>
    );
}

export default App;
