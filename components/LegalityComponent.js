import React from "react";



export default function LegalityComponent(props) {

  
    return (
        <div
           className="mt-10 not-italic font-normal text-3xl leading-9 text-white desc-component" 
        >
              Legality and License


            <div
                className="not-italic font-light text-lg leading-5 mt-3"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
            
                {
                    props.legality
                }
            </div>
        </div>
    );
}
