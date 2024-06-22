import React from "react";


const pages = ["HOME", "Pricing", "About", "CONTACT"];


export default function DescComponent(props) {






  
    return (
        <div
           className="mt-10 not-italic font-normal text-3xl leading-9 text-white desc-component" 
        >
            Descripton


            <div
                className="not-italic font-light text-lg leading-5 mt-3"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
             
                {
                    props.desc?props.desc:"waiting...."
                }
            </div>
        </div>
    );
}
