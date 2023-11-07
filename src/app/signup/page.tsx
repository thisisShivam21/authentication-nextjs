"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";
import { Axios } from "axios";

export default function SignupPage() {
    const router = useRouter();

    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user]);

    const [loading, setLoading] = React.useState(false)

    const onSignup = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text" 
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />

            <label htmlFor="email">Email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text" 
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password" 
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />

            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No Signup" : "Signup"}
            </button>
            <Link href={"/login"}>Visit Login Page</Link>
        </div>
    )
}