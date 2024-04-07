import React, { useState } from "react";
import Registerpagetwo from "./Registerpagetwo";
import Registerpageone from "./Registerpageone";
import Headline from "./Headline";

const Register = () => {
    const [input, setInput] = useState({});
    const [page, setPage] = useState(false);

    return (
        <>
            <Headline page={page} />
            {page ? (
                <Registerpagetwo input={input} />
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
