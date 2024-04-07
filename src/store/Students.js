import React, { createContext, useContext, useEffect, useState } from "react";
import { checkAuth, fetchUserDetails } from "../components/httpRequest";


const StudentContext = createContext();

// eslint-disable-next-line react/prop-types
export const StudentProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {   
        checkAuth(setIsAdmin, ()=>{},() => {}, () => {});
    })

    useEffect(() => {
        if(isAdmin){
            fetchUserDetails(setData);
        }
    }, [isAdmin])
    return (
        <StudentContext.Provider value={data}>
            {children}
        </StudentContext.Provider>
    );
};

export const useStudent = () => {
    return useContext(StudentContext);
};
