"use client";

import useFirebase from "@/hooks/useFirebase";
import Link from "next/link";
import React from "react";
import { useRef } from "react";

const Login = () => {
    const {signInWithGoogle,signInWithEmail } = useFirebase()

    const emailRef = useRef()
    const passwordRef = useRef()

    const loginHandler = (e)=>{
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log({email, password})
        signInWithEmail(email, password)
    }
    return (
        <div>
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <form className="theme-form" onSubmit={loginHandler} >
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required
                                            ref={emailRef}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="review">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="review"
                                            placeholder="Enter your password"
                                            required
                                            ref={passwordRef}
                                        />
                                    </div>
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <button className="btn btn-solid"
                                        type={"submit"}
                                        >
                                            Login
                                        </button>
                                        <Link href="/forget-password" className="text-danger">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </form>
                                <button className="btn btn-solid w-100 mt-3" onClick={signInWithGoogle}>
                                    Signin with google
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>
                                    Sign up for a free account at our store. Registration is quick
                                    and easy. It allows you to be able to order from our shop. To
                                    start shopping click register.
                                </p>
                                <Link href="/signup" className="btn btn-solid">
                                    Create an Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
