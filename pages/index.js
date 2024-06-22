import React from "react";
import Image from "next/image";
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import LogoBlack from "../public/blackLogo.png";
import TextBlack from "../public/Vector.png";
import {protectedRoutes} from "../ProtectedRoutes"
import VideoUp from "../public/Group_12799.png";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";
import useAuth from "../context/authcontext";

import auth from "../firebase";

import { useEffect } from "react"

// import sample from '../public/Videos/sample.mp4';

// const pages = ["HOME", "Pricing", "About", "CONTACT"];
const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];


export default function Home() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const router = useRouter();
  const { user, logout } = useAuth()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [authState, setAuthState] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      {/* appbar */}
      <div className="flex smScreen">
        <Image className="logo" src={LogoBlack} />
        <Image className="logo2" src={TextBlack} />
      </div>
      <video autoPlay loop muted className='w-full index-video'>
        <source src={require("../public/Videos/video.mp4")} type='video/mp4' />
      </video>
      <div>
        <Image className="w-full absolute video-img" style={{ top: "0px" }} src={VideoUp} />
      </div>
      <div className="flex smScreen">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
      </div>
      <div
       
        className="explore explore-div not-italic absolute font-semibold text-6xl text-start text-white"
      >
        Search. Discover. Innovate.
        <br />
        <div className="mt-4 not-italic font-light text-2xl leading-7 text-white index-p">
          Paperade leverages AI and empowers users to  explore <br /> widely, validate efficiently, and execute confidently.
        </div>
        <div className="mt-4">
          <Button onClick={() => {
            user ? router.push("/industry") : router.push("/login")
          }} className="ideabtn">Find Your Idea</Button>
          <Button onClick={() => {
            user ? router.push("/location")
              : router.push("/login")
          }} className="alreadyIdea">Already Have Idea</Button>
        </div>
      </div>

      {
        user ? <div
          className="p-8 pt-6 loginBtn absolute text-center text-white"
          type="submit"
          onClick={() => {
            var auth = getAuth();
            console.log(auth)
            if (auth.currentUser !== null) {
              signOut(auth).then(() => {
                console.log("Success");
                router.push("/login")
              }).catch(err => { });
            } else {
              router.push("/login")
            }
          }}
        >
          Logout
        </div> : <div
          className="p-8 pt-6 loginBtn absolute text-center text-white"
          type="submit"
          onClick={() => {
            router.push("/login")

          }}
        >
          Login
        </div>
      }
    </div>
  );
}

