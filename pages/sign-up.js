import React from 'react'
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png"
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png"
import StartUp from "../public/startup-3267505_1920 1.png"
import googlelogo from "../public/search.png"
import FBLogo from "../public/fblogo.png"
import style from '../styles/Home.module.css';
import { Button } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile, fireStore } from "firebase/auth";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useRouter } from 'next/router';
import { publicRoutes } from '../PublicRoutes';

 function Signup() {
    const router = useRouter();


    const color = {
        color: "rgb(33, 18, 86)"
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toastmsg, setToastMessage] = useState("");
    const [agree, setAgree] = useState(false);

    const warningToast = (message) => {
        Toastify({
            text: message,
            position: "center",
            className: "danger",
            offset: {
                x: 0,
                y: 40,
            },
            style: {
                background: "red",
                color: 'white'
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


    const handleSubmit = async (e) => {
        e.preventDefault();


        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




        if (name === "" || email === "" || password === "") {
            warningToast("Please fill all fields");
        } else if (!regEmail.test(email)) {
            warningToast("Please Provide a valid email address");
        } else if (password.length < 6) {
            warningToast("Please Provide a password of more then 5 characters");
        } else if (agree === false) {
            warningToast("Please Accept our Terms and conditions");

        }
        else {
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);

                console.log(`User ${user.uid} created`)
                await updateProfile(user, { displayName: name });
                console.log("user name updated");
                successToast("User created successfully");
                router.push("/login")
                // window.location.replace("./login.js")
            } catch (error) {
                console.log(error.message);
                warningToast(error.message)
            }

        }

    }

    return (
        <div className='row ' style={{ width: "100%", overflow: 'hidden' }}>
            <div className='col-7' style={{ height: "100vh" }} >
                <div className='row h-100'>
                    <div className='col-6  bg-blue-600 '>
                        <div className='flex justify-center mt-4' >
                            <Image src={Logo} />
                            <Image className='ml-3 block object-contain' src={LogoText} />
                        </div>
                    </div>
                    <div className={`${style.imagedivstyling}`}>
                        <Image className={` ${style.imageStyling}`} src={StartUp} />
                    </div>
                </div>
            </div>
            <div className='col-5 pe-5'>
                <div className='row '>

                    <div>
                        <div className='' style={color}>
                            <span className='mt-3' style={{ float: "right", color: "gray" }}>
                                Already have an account ? <span style={{ color: "#341E9D", cursor:"pointer",fontWeight: "bold" }} onClick={()=>{
                                    router.push("/login")
                                }}>Login</span>
                            </span>
                            <div style={{ paddingTop: "100px", fontSize: "20px" }}>
                                <h4 >Hey There! Welcome to AIBUSINESS</h4>
                                <h5>Kindly fill in the following information to get Started</h5>
                                <div>
                                    <form>
                                        <div className="mb-3 ">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <TextField
                                                onChange={(e) => {
                                                    setName(e.target.value);

                                                }}
                                                id="RegisterName"
                                                label="Name"
                                                placeholder="Enter your full name"
                                                //   helperText="Full width!"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                autoComplete="name"
                                                name="Name"
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Email" className="form-label">Email address</label>
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
                                                name="Name"
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <TextField
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                id="RegisterName"
                                                label="Password"
                                                type="password"
                                                placeholder="Enter a secure password  "
                                                //   helperText="Full width!"
                                                fullWidth
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                autoComplete="name"
                                                name="Name"
                                                required
                                                autoFocus
                                            />
                                        </div>
                                        <div className="text-center  items-center">
                                            <div className="mb-3  ">
                                                <TextField type="checkbox" onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setAgree(true);
                                                    } else {
                                                        setAgree(false);
                                                    }

                                                }} className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: "gray" }}>I agree to the <span style={{ color: "#341E9D" }}>terms of services</span> and <span style={{ color: "#341E9D" }}>privacy policies</span></label>
                                            </div>
                                            <Button className="btn  w-75 p-3 " onClick={handleSubmit} style={{ backgroundColor: "rgb(62, 25, 185)", color: "white", borderRadius: "50px" }}>Create account</Button>


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
    )
}


export default publicRoutes(Signup)

// <div className='ms-5 ps-5 ' style={{marginLeft:"40%"}}>
// <h1>Hey There! Welcome to AIBUSINESS</h1>
// <h3>Kindly fill in the following information to get Started</h3>

// <div>
//     <form>
//         <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="Email" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" />
//         </div>
//         <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//             <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms and conditons</label>
//         </div>
//         <button type="submit" className="btn btn-primary">Create account</button>
//     </form>
// </div>
// </div>


{/* <div style={{display:"block" ,position:"absolute",margin:"8%" }} className="grid-cols-3">
<Image className='text-transparent object-contain bg-white pb-5 pl-5' style={{ height: "500px", width: "500px", right: "515px", top: "100px" }} src={StartUp} />
</div> */}
