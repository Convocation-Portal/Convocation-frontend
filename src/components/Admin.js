import React, { useEffect, useState } from "react";
import { fetchUserDetails } from "./httpRequest";

const Admin = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUserDetails(setData, setLoading);
    }, []);
    console.log(data);
    return <>{!loading && <div>Admin</div>}</>;
};

export default Admin;
