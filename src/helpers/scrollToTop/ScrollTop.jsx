"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ScrollTop = () => {
    return (
        <ScrollToTop
            smooth
            style={{
                backgroundColor: "#ed8301",
                borderRadius: "50%",
                boxShadow: "none",
                right: 30,
                bottom: 100,
                // border:"1px solid #00C0FF"
            }}
            color="#fff"
            viewBox="0 0 250 250"
        />
    );
};

export default ScrollTop;
