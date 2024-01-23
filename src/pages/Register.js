import React, { useState } from "react";
import Registerpagetwo from "./Registerpagetwo";
import Registerpageone from "./Registerpageone";

const Register = () => {
    const [input, setInput] = useState({});
    const [page, setPage] = useState(true);

    return (
        <>
            {page ? (
                <Registerpagetwo
                    set={setPage}
                    input={input}
                    setInput={setInput}
                />
            ) : (
                <Registerpageone
                    set={setPage}
                    input={input}
                    setInput={setInput}
                />
            )}
        </>
    );
};

export default Register;
