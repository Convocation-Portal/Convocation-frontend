import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../components/httpRequest";
import Admin from "../components/Admin";
import Register from "../components/Register";
const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const redirect = useNavigate();
    useEffect(() => {
        checkAuth(setIsAdmin, setLoading, redirect);
    }, []);
    return <>{!loading && <>{isAdmin ? <Admin /> : <Register />}</>}</>;
};

export default Home;
