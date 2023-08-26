import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <section className="p-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="error-section">
                            <h1>404</h1>
                            <h2>page not found</h2>
                            <Link href="/" className="btn btn-solid">
                                back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
