"use client";

import React from "react";

const page = () => {
    return (
        <div>
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <h2>Forget Your Password</h2>
                            <form className="theme-form">
                                <div className="form-row row">
                                    <div className="col-md-12">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            required=""
                                        />
                                    </div>
                                    <a href="#" className="btn btn-solid w-auto">
                                        Submit
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
