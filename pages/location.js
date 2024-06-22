import React from "react";
import BGindustry from "../public/Global_-_45954_1.png";
import BGindustry2 from "../public/Rectangle_6243.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";

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
import MenuItem from "@mui/material/MenuItem";
import Map from "../public/world-map-png-17 2.png";
import SearchIcon from "../public/searchicon.png";
import { useState } from "react";
import { useRouter } from "next/router";
import {protectedRoutes} from "../ProtectedRoutes"
import useAuth from "../context/authcontext";

const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];

 function IndustryView() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [keyword, setKeyWord] = useState("");
  const router = useRouter();

  const {logout}=useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div >
      <div className="flex">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
      </div>
 
      <div
        className="location-map not-italic absolute font-semibold text-6xl text-center text-white"
      >
        <div className="flex ">
          <Image className="searchicon absolute py-2 px-2" style={{top:'-75px',left:'120px !important',border:'1px solid white',borderRadius:'10px'}} src={SearchIcon} width={50}  onClick={()=>{
            router.push({
              pathname:"/idea",
              query:{
                keyword:keyword
              }
            })
          }}/>
          <input type="text" className="searchbar absolute" style={{top:'-120px',left:'20px'}} placeholder="Enter Keyword" onChange={(e) => {
            setKeyWord(e.target.value);

          }} />
        </div>
      </div>
      <Image className="w-full bg-industry" src={BGindustry}  style={{height:'100vh'}}/>

      <div
        className="p-8 pt-6 loginBtn-location absolute text-center text-white"
        type="submit"
        onClick={logout}
      >
        Logout
      </div>
    </div>
  );
}
export default protectedRoutes(IndustryView)