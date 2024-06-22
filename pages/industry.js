import React from "react";
import BGindustry from "../public/Global_-_45954_1.png"
import BGindustry2 from "../public/Rectangle_6243.png"
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png"

import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useRouter } from "next/router";
import { protectedRoutes } from "../ProtectedRoutes";
import useAuth from "../context/authcontext";






 function Industry() {
  const ind1 = ["Agriculture", "Chemical", "Commerce", "Construction", "Education"];
  const ind2 = ["Food", "Health", "Tourism", "Health Service", "Mining"];
  const ind3 = ["Mechanical", "Oil and Gas", "Poststal Services", "Textile", "Transport"];
  const ind4 = ["Transport", "Arts", "Sports", "Entertainment", "Drop shiping"];

  const router = useRouter();

  const {logout}=useAuth();

  const [selectedind, setSelectedindustry] = useState("")

  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
    <div style={{ height: "100vh" }}>
      <div className="smScreen flex logodiv">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
      </div>
     
      <div
        className="smbackground bgindustry2div  not-italic absolute font-semibold text-6xl text-center text-white"
      >
        <Image src={BGindustry2}  className="bgindustry2"/>
      </div>
      <Image className="w-full setHeight" src={BGindustry}/>
      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"

        onClick={logout}
      >
        Logout
      </div>
      <div className="overflow-y-auto scrollbar-hide  industireslist">
        <div className="not-italic font-normal text-3xl mb-10 leading-9 text-center text-white">
          Industries List
        </div>
        <div className="lg:flex sm:block justify-center">
          {
            ind1.map((ind) => {
              return <Button className="industrybtn" onClick={() => {
                router.push({
                  pathname: "./industry-view", query: {
                    name: ind
                  }
                })

              }
              }>
                {ind}
              </Button>
            })
          }
        </div>
        <div className="lg:flex sm:block justify-center ">
          {
            ind2.map((ind) => {
              return <Button className="industrybtn" onClick={() => {
                router.push({
                  pathname: "./industry-view", query: {
                    name: ind
                  }
                })

              }
              }>
                {ind}
              </Button>
            })
          }
        </div>
        <div className="lg:flex sm:block justify-center ">
          {
            ind3.map((ind) => {
              return <Button className="industrybtn" onClick={() => {
                router.push({
                  pathname: "./industry-view", query: {
                    name: ind
                  }
                })

              }
              }>
                {ind}
              </Button>
            })
          }
        </div>
        <div className="lg:flex sm:block justify-center ">
          {
            ind4.map((ind) => {
              return <Button className="industrybtn" onClick={() => {
                router.push({
                  pathname: "./industry-view", query: {
                    name: ind
                  }
                })

              }
              }>
                {ind}
              </Button>
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}


export default protectedRoutes(Industry)