import React from "react";


import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const pages = ["HOME", "Pricing", "About", "CONTACT"];


let i = true;

export default function ResearchPaperComponent(props) {

    return (
        <div
        className="mt-10 not-italic font-normal text-3xl leading-9 text-white desc-component" 
     >
            Related Research Paper

            <div
                className="not-italic font-light text-lg leading-5 mt-3"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
                {
                    (props.data.length>0) ? props.data.map((d) => {
                        return d.length ? <li>{d}</li> : ""
                    }) : <span style={{ color: "white" }}>No Research Paper found against this idea</span>
                }
            </div>
        </div>
    );
}
