"use client";

import React, { useState } from "react";
import { useRanger } from "react-ranger";
const PrizeRange = () => {
    const [values, setValues] = useState([0, 0]);

    // console.log(values);
    const { getTrackProps, handles } = useRanger({
        values,
        onDrag: setValues,
        min: 0,
        max: 100,
        stepSize: 1,
    });
    return (
        <div className="container mx-auto">
            <div
                {...getTrackProps({
                    style: {
                        height: "4px",
                        background: "#F88E07",
                        boxShadow: "inset 0 1px 2px #F88E07",
                        borderRadius: "2px",
                    },
                })}
            >
                {handles.map(({ getHandleProps }, index) => (
                    <div
                        key={index}
                        {...getHandleProps({
                            style: {
                                width: "12px",
                                height: "12px",
                                borderRadius: "100%",
                                background: "#F88E07",
                                border: "solid 1px #F88E07",
                            },
                        })}
                    />
                ))}
            </div>
            <div
                style={{ width: "100%" }}
                className="d-flex flex-row justify-content-between align-items-center mt-3"
            >
                <div>{values[0]}</div>
                <div>{values[1]}</div>
            </div>
        </div>
    );
};

export default PrizeRange;
