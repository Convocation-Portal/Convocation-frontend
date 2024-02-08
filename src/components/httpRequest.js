import Cookies from "js-cookie";
import { backend } from "../constant";

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
        console.log(response);
        Cookies.set("token", response.authToken);
        redirect("/");
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
    if (res.status === 201) {
        const response = await res.json();
        Cookies.set("token", response.authToken);
        redirect("/verify-email");
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

export const convocationRegistration = async (input, redirect) => {
    const token = Cookies.get("token");
    const url = `${backend}/convocation-registration`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
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

export const forgotPassword = async (email) => {
    const url = `${backend}/user/password/forgot-password`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await res.json();
    if (response.success) {
        alert("Reset Password link is successfully sent to the email");
    }
};

export const fetchUserDetails = async (set, loading) => {
    const token = Cookies.get("token");
    const url = `${backend}/admin/student-details`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (res.status === 200) {
        const response = await res.json();
        set(response);
    }
    loading(false);
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
        alert("Verification Email sent successfully");
    } else {
        alert(response.message);
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
        alert(response.message);
    }
};

// export const searchHandler = async (
//     input,
//     setProgram,
//     setDepartment,
//     setRoll
// ) => {};
