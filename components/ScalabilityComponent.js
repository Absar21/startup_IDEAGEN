import React from "react";


const pages = ["HOME", "Pricing", "About", "CONTACT"];


let i = true;

export default function ScalAbilityComponent(props) {



    return (
        <div
        className="mt-10 not-italic font-normal text-3xl leading-9 text-white desc-component" 
     >
            Scalability

            <div
                className="not-italic font-light text-lg leading-5 mt-3"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >

                {
                   props.scal
                }
            </div>
        </div>
    );
}
