import React, { useState } from "react";
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";
import StartUp from "../public/startup-3267505_1920 1.png";
import googlelogo from "../public/search.png";
import FBLogo from "../public/fblogo.png";
import { Button } from "@mui/material";
import style from "../styles/Home.module.css";
import TextField from "@mui/material/TextField";
import useAuth from "../context/authcontext"
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useRouter } from "next/router";
import { publicRoutes } from "../PublicRoutes";



 function Login() {
  const color = {
    color: "rgb(33, 18, 86)",
  };
  const router = useRouter();
const {login}=useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const warningToast = (message) => {
    Toastify({
      text: message,
      position: "center",
      className: "info",
      offset: {
        x: 0,
        y: 40,
      },
      style: {
        background: "red",
        color: 'black'
      },
    }).showToast();
  }
  const successToast = (message) => {
    Toastify({
      text: message,
      position: "right",
      className: "info",
      offset: {
        x: 0,
        y: 40,
      },
      style: {
        background: "#AAE460",
        color: 'black'
      },
    }).showToast();
  }

  const handleLogin = async (e) => {


    login(email, password);




  }
  return (
    <div className="row " style={{ width: "100%", overflow: "hidden" }}>
      <div className="col-7" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-6  bg-blue-600 " style={{ height: "1000px" }}>
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
                <span style={{ color: "#341E9D", fontWeight: "bold", cursor: "pointer" }} onClick={() => {
                  router.push("/sign-up");
                }}>
                  Sign Up
                </span>
              </span>
              <div style={{ paddingTop: "100px", fontSize: "20px" }}>
                <h4 className="font-bold text-3xl justify-center flex items-center text-center text-gray-900">Welcome Back</h4>
                <h5 className="font-normal text-xl leading-7 flex justify-center mb-10 items-center text-center text-gray-600">Sign in to meet master artisans and explore <br />
                  new cultures and destinations
                </h5>
                <div>
                  <form>
                    <div className="mb-3">
                      <label for="Email" className="form-label">
                        Email address
                      </label>
                      <TextField
                        onChange={(e) => {

                          setEmail(e.target.value);
                        }}
                        id="RegisterName"
                        label="Email"
                        placeholder="Enter your email address"
                        //   helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        autoComplete="name"
                        name="email"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <TextField
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        id="RegisterName"
                        label="Password"
                        placeholder="Enter a secure password"
                        fullWidth
                        margin="normal"
                        type="password"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        autoComplete="name"
                        name="Name"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="font-semibold flex justify-end mb-10 text-sm leading-5 text-indigo-800">Forgot password?</div>

                    <div className="text-center  items-center">
                      <div className="mb-3 form-check flex" style={{ display: "flex" }}>
                        <TextField
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          for="exampleCheck1"
                          style={{ color: "gray" }}
                        >
                          I agree to the{" "}
                          <span style={{ color: "#341E9D" }}>
                            terms of services
                          </span>{" "}
                          and{" "}
                          <span style={{ color: "#341E9D" }}>
                            privacy policies
                          </span>
                        </label>
                      </div>
                      <Button
                        onClick={handleLogin}
                        className="btn  w-75 p-3 "
                        style={{
                          backgroundColor: "rgb(62, 25, 185)",
                          color: "white",
                          borderRadius: "50px",
                        }}
                      >
                        Sign In
                      </Button>
                      <h4 className="mt-3">or</h4>
                    </div>
                  </form>
                </div>
                <div className={style.logodiv}>
                  <Image src={googlelogo} className={style.signuplogos} />
                  <span>Signup with google</span>
                </div>
                <div className={style.logodiv}>
                  <Image src={FBLogo} className={style.signuplogos} />
                  <span>Sign up with Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default publicRoutes(Login)
