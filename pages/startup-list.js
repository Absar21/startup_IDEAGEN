import React from "react";
import BGindustry from "../public/Global_-_45954_1.png"
import BGindustry2 from "../public/Rectangle_6243.png"
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png"

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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { generate_List } from "../openai/openaiconfig"
import { protectedRoutes } from "../ProtectedRoutes";
import useAuth from "../context/authcontext";

const pages = ["HOME", "Pricing", "About", "CONTACT"];
let i=true;


function StartUpList() {

  const router = useRouter();
  const industryname = router.query.industry;
  const country = router.query.country;

  const [list, setList] = useState([])
const {logout}=useAuth();

  useEffect(() => {
    if (i) {
      i=false;
      generate_List(industryname, country).then((res) => {
        console.log("adsa"+industryname ,country);
        console.log(res.data.choices[0].text);
        setList(res.data.choices[0].text.split("\n"));
        return 
      })
    }
    else{

    }
    
  }, [country])



  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="flex">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
      </div>
     
      <div
  
        className="not-italic bgindustry2stlistdiv  absolute font-semibold text-6xl text-center text-white"
      >
        <Image src={BGindustry2} className="bgindustry2stlist"/>
      </div>
      <Image className="w-full" src={BGindustry} style={{height:'100vh'}}/>

      <div
        className=" pt-6 loginBtn absolute text-center text-white"
        type="submit"
        onClick={logout}
      >
        Logout
      </div>
      <div className="startup overflow-y-scroll scrollbar-hide startup-div-scrolldiv" >
        <div className="not-italic font-normal text-3xl mb-2 leading-9 text-center text-white" style={{position:''}}>
          Startups Ideas
        </div>
        <div  className="grid  lg:grid-cols-3 md:grid-cols-2">

          {
            list.map((item) => {
              return item.length>0? <Button className="industrybtn" style={{
                overFlow:"auto"
              }} onClick={
                ()=>{
                  i=true
                  router.push({
                    pathname:"./startup-description",
                    query:{
                    idea:item,
                    country:country

                    }
                  })
                }
              }>
                {
                item
                }
              </Button>:""

            })
          }


          
        </div>
        {/* <div className="flex justify-center">
          <Button className="industrybtn">
            2-VR therapy
          </Button>
          <Button className="industrybtn">
            6-Mental Health Support
          </Button>
          <Button className="industrybtn">
            10-Billing and payment
          </Button>
          <Button className="industrybtn">
            14-Health Service
          </Button>
          <Button className="industrybtn">
            18-Mining
          </Button>
        </div> */}
        {/* <div className="flex justify-center">
          <Button className="industrybtn">
            3-Mechanical
          </Button>
          <Button className="industrybtn">
            7-Oil and gas
          </Button>
          <Button className="industrybtn">
            11-Postal Service
          </Button>
          <Button className="industrybtn">
            15-Textile
          </Button>
          <Button className="industrybtn">
            15-Textile
          </Button>
        </div> */}
        {/* <div className="flex justify-center">
          <Button className="industrybtn">
            4-Transport
          </Button>
          <Button className="industrybtn">
            8-Arts
          </Button>
          <Button className="industrybtn">
            12-Sports
          </Button>
          <Button className="industrybtn">
            16-Entertainment
          </Button>
          <Button className="industrybtn">
            20-Dropshiping
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default protectedRoutes(StartUpList)