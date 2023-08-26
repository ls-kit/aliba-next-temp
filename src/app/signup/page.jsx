"use client";

import Link from "next/link";
import React from "react";

const SignUp = () => {
    return (
        <div>
            <section className="login-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Sign up</h3>
                            <div className="theme-card">
                                <form className="theme-form">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="review">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="review"
                                            placeholder="Enter your password"
                                            required=""
                                        />
                                    </div>
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <a href="#" className="btn btn-solid">
                                            Login
                                        </a>
                                        <Link href="/forget-password" className="text-danger">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login">
                            <h3>Already have an account?</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Login just few second</h6>
                                <p>
                                    Sign up for a free account at our store. Registration is quick
                                    and easy. It allows you to be able to order from our shop. To
                                    start shopping click register.
                                </p>
                                <Link href="/login" className="btn btn-solid">
                                    Login here
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
