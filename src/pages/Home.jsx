import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../components/httpRequest";
import Admin from "../components/Admin";
import Register from "../components/Register";
import { useAuth } from "../store/Auth";
const Home = () => {
    const { setUser } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const redirect = useNavigate();
    useEffect(() => {
        checkAuth(setIsAdmin, setLoading, redirect, setUser);
    }, []);
    return <>{!loading && <>{isAdmin ? <Admin /> : <Register />}</>}</>;
};

export default Home;
