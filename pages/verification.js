import React from "react";
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";
import StartUp from "../public/startup-3267505_1920 1.png";
import googlelogo from "../public/search.png";
import FBLogo from "../public/fblogo.png";
import style from "../styles/Home.module.css";
import { borderRadius } from "@mui/system";
import TextField from "@mui/material/TextField";
export default function Verification() {
  const color = {
    color: "rgb(33, 18, 86)",
  };

  return (
    <div className="row" style={{ width: "100%", overflow: "hidden", backgroundColor:"#ECFCFF" , height:"800px"}}>
      <div className="col-7" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-6  bg-blue-600 " style={{height:"1000px"}}>
            <div className="flex justify-center mt-4">
              <Image src={Logo} />
              <Image className="ml-3 block object-contain" src={LogoText} />
            </div>
          </div>

          <div className={`${style.imagedivstyling}`}>
            <Image className={` ${style.imageStyling}`} src={StartUp} />
          </div>
        </div>
      </div>

      <div className="col-5 pe-5">
        <div className="row ">
          <div>
            <div className="" style={color}>
              <span className="mt-3" style={{ float: "right", color: "gray" }}>
                Don,t have an account ?{" "}
                <span style={{ color: "#341E9D", fontWeight: "bold" }}>
                  Sign Up
                </span>
              </span>
              <div style={{ paddingTop: "250px", fontSize: "20px" }}>
                <h4 className="font-bold text-3xl justify-center flex items-center text-center text-gray-900">
                Verification
                </h4>
                <h5 className="font-normal text-xl leading-7 flex justify-center mb-10 items-center text-center text-gray-600">
                Enter the 6-digit OTP code sent to <br />
your email address
                </h5>
                <div className="flex justify-center mb-10">
                <form>
        <div className="otpContainer flex justify-start">

          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="1" maxLength="1"
            

          />
           <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="1" maxLength="1"
            

          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="2" maxLength="1"

          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="3" maxLength="1"

          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="4" maxLength="1"
          />

          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            style={{
    height: "30px",
    width: "30px",
    textAlign: "center",
                margin:"10px"
}}
            tabIndex="5" maxLength="1"
          />
        </div>
      </form>

                </div>
              </div>
            </div>
          </div>
          <div className="text-center  items-center">
                      <button
                        type="submit"
                        className="btn  w-75 p-3 "
                        style={{
                          backgroundColor: "rgb(62, 25, 185)",
                          color: "white",
                          borderRadius: "50px",
                        }}
                      >
                        Next
                      </button>
                    </div>
                    <div className="flex justify-center">
                    <div className="mt-3 not-italic font-normal text-sm leading-5 text-gray-600">
                  Didn’t get the code? 
                  <span className="not-italic font-normal text-sm leading-4 text-blue-700">
                   Resend 
                  </span>
                  </div>
                
                    </div>
        </div>
      </div>
      
    </div>
  );
}
