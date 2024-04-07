import Cookies from "js-cookie";
import { backend } from "../constant";
import { toast } from "react-toastify";

//Backend Api urls
// /auth/signup ->
// requires: {name, email, password, usertype}
// returns: { message: "Signed successfully", authToken }

// /auth/login ->
// requires: {email, password}
// returns: { message: "Logged Sucessfully", authToken }

// /auth/me ->
// headers: {Authorization: `Bearer ${token}`}
// returns: userData

// /admin/student-details ->
// headers: {Authorization: `Bearer ${token}`}
// returns: []

// /convocation-registration ->
// requires: {name, email, rollno, department, program, capSize, jacketSize, hostelStay, hostelMeal, feeReceipt, idProof}
// headers: {Authorization: `Bearer ${token}`}
// returns: { success: true, data: savedStudent }

// /user/password/forgot-password ->
// requires: {email}
// returns: { success: true, message: 'Password reset email sent to your registerd email' }

// /user/password/reset-password/:token ->

export const ErrorMessage = (message) => {
    toast.error(message, {
        position: "bottom-right",
        theme: "dark",
        autoClose: 5000,
    });
};

export const login = async (input, redirect) => {
    const url = `${backend}/auth/login`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await res.json();
    if (res.status === 200) {
        Cookies.set("token", response.authToken);
        redirect("/");
    } else {
        ErrorMessage(response.message);
    }
};

export const register = async (detail, redirect) => {
    const url = `${backend}/auth/signup`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ ...detail, usertype: "STUDENT" }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await res.json();
    if (res.status === 201) {
        Cookies.set("token", response.authToken);
        redirect("/verify-email");
    } else {
        ErrorMessage(response.message);
    }
};

export const checkAuth = async (set, loading, redirect, user) => {
    const token = Cookies.get("token");
    if (token) {
        const url = `${backend}/auth/me`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.status === 200) {
            const response = await res.json();
            user(response);
            if (response.usertype === "ADMIN") {
                set(true);
            }
        } else {
            redirect("/login");
        }
    } else {
        redirect("/login");
    }
    loading(false);
};

export const forgotPassword = async (email, redirect) => {
    const url = `${backend}/query/forgot-password`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await res.json();
    if (res.status == 200) {
        toast.success("Reset Password link is successfully sent to the email", {
            position: "bottom-right",
            theme: "dark",
            autoClose: 5000,
        });
        redirect("/reset-password");
        Cookies.set("tempToken", response.authToken);
    } else {
        ErrorMessage(response.message);
    }
};

export const fetchUserDetails = async (set) => {
    const token = Cookies.get("token");
    const url = `${backend}/admin/student-details`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const response = await res.json();
    if (res.status == 200) {
        set(response);
    } else {
        ErrorMessage(response.message);
    }
};

export const resendHandler = async (set) => {
    const token = Cookies.get("token");
    const url = `${backend}/otp/resend`;
    const res = await fetch(url, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const response = await res.json();
    if (res.status === 201) {
        set(new Date().getTime() + 5 * 60 * 1000);
        ErrorMessage("Verification Email sent successfully");
        Cookies.remove("tempToken");
    } else {
        ErrorMessage(response.message);
    }
};

export const verifyEmail = async (OTP, redirect) => {
    const token = Cookies.get("token");
    const url = `${backend}/otp/verify`;
    const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ OTP }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (res.status === 201) {
        redirect("/");
    } else {
        const response = await res.json();
        ErrorMessage(response.message);
    }
};

export const Registermain = async (input, details, redirect) => {
    const token = Cookies.get("token");
    const object = {
        name: input.nameeng,
        email: input.email,
        rollno: input.rollnum.toLocaleLowerCase(),
        department: input.department,
        program: input.program,
        capSize: parseInt(details.capSize),
        jacketSize: parseInt(details.jacketSize),
        hostelStay: details.stay,
        hostelMeal: details.dinner,
        feeReceipt: details.fee,
        idProof: details.idProof,
    };
    const url = `${backend}/convocation-registration`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (res.status === 201) {
        redirect("/success");
    } else {
        redirect("/failure");
    }
};

export const changePassword = async (input, redirect) => {
    const token = Cookies.get("tempToken");
    const url = `${backend}/query/set-Password`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const response = await res.json();
    if (res.status == 200) {
        toast.success("Password Changed Successfully", {
            position: "bottom-right",
            theme: "dark",
            autoClose: 5000,
        });
        Cookies.set("token", token);
        Cookies.remove("tempToken");
        redirect("/");
    } else {
        ErrorMessage(response.message);
    }
};

export const resentOTP = async ( set) => {
    const url = `${backend}/query/forgot-password`;
    const token = Cookies.get("tempToken");

    const res1 = await fetch(`${backend}/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const response1 = await res1.json();
    if(res1.status ===200){
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ email: response1.email }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const response = await res.json();
        if (res.status == 200) {
            toast.success(
                `Reset Password link is successfully sent to ${response1.email}`,
                {
                    position: "bottom-right",
                    theme: "dark",
                    autoClose: 5000,
                }
            );
            Cookies.set("tempToken", response.authToken);
            set(new Date().getTime() + 5 * 60 * 1000);
        } else {
            ErrorMessage(response.message);
        }
    }else {
        ErrorMessage(response1.message);
    }
    
};
