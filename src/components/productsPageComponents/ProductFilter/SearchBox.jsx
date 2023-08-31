import React from "react";

const SearchBox = () => {
    return (
        <div>
            <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-md-12">
                    <div className="form">
                        <i className="fa fa-search"></i>
                        <input
                            type="text"
                            className="form-control form-input"
                            placeholder="Search anything..."
                        />
                        <span className="left-pan">
                            <i className="fa-solid fa-camera"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
