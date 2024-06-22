import React from "react";
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";

import style from "../styles/Home.module.css";

import WelcomeImage from "../public/welcome.png"
export default function Welcome() {
  return (
    <div style={{background:"#3478F6"}}>
        <div className="flex justify-start p-2">
            <Image className="ml-6 mt-2" src={Logo} />
            <Image className="ml-6 mt-2" src={LogoText} />
        </div>
        <div className="flex justify-end relative" style={{bottom:"50px", right:"20px"}} >
        <span style={{ float: "right", color:"rgba(255, 255, 255, 0.75)", }} className="not-italic font-medium text-base leading-5 text-right">
                Don,t have an account ?{" "}
                <span style={{ color: "#341E9D", fontWeight: "bold" }}>
                  Sign Up
                </span>
              </span>
        </div>
        <div className="flex justify-center pt-20 not-italic font-bold text-2xl leading-8 flex items-center text-center text-white">
        Success! You have a new password now
        </div>
        <div className="flex pt-10 justify-center">
            <Image src={WelcomeImage} />
        </div>
        <div style={{paddingBottom:"180px"}} className="text-center pt-20  items-center">
                      <button
                        type="submit"
                        className="btn p-3 "
                        style={{
                          backgroundColor: "#E9E9FD",
                          color: "#3B1CBD",
                          borderRadius: "50px",
                          width:"400px",
                        }}
                      >
                        Got it
                      </button>
                    </div>

    </div>

  );
}
