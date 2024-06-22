import React, { useEffect } from "react";
import BGindustry from "../public/Global_-_45954_1.png";
import BGindustry2 from "../public/Rectangle_6243.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";

import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";

import MenuItem from "@mui/material/MenuItem";
import Location from "../public/Group 18.png";
import Share from "../public/Group 19.png";
import Share2 from "../public/Group 20.png";
import { useState } from "react";
import Book from "../public/book-1822474_1920 1.png";
import { useRouter } from "next/router";
import { general_Overview } from "../openai/openaiconfig";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { protectedRoutes } from "../ProtectedRoutes";
import axios from "axios";
import useAuth from "../context/authcontext";


const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];



 function IndustryView() {
  const [details, setdetails] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([])

  const router = useRouter();
  const industryname=router.query.name;

  const {logout}=useAuth();

  useEffect(() => {
    general_Overview(industryname).then(res => {
      console.log(res.data.choices[0].text);
      setdetails(res.data.choices[0].text)
    });
  }, [industryname])




  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data[0].name.common);
      setCountries(res.data)
    })
  }, [])
  return (
    <>
    <div style={{ height: "100vh" }}>
      <div className="flex">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
      </div>
     
      <div
    
        className="not-italic absolute font-semibold text-6xl text-center text-white img-div"
      >
        <Image src={BGindustry2}  className="bgindiustry2-industryview"/>
      </div>
      <Image className="w-full" src={BGindustry} style={{height:'100vh'}}/>

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Logout
      </div>
      <div  className="overflow-y-auto scrollbar-hide industry-view-scrolldiv">
        <div className="grid grid-cols-2 pr-5">
          <div className="flex justify-center book-div" style={{ marginLeft: "-60px" }}>
            <Image className="book" src={Book} />
          </div>
          <div  className="indviewdetails">
            <div style={{ marginLeft: "-75px" }} className="not-italic font-normal text-3xl leading-9 text-white mb-8">
              {
                industryname
              }        </div>
            <span style={{ marginLeft: "-75px" }} className="w-full mb-10 block not-italic font-light text-lg leading-5 text-white pr-12">

              {
                details
              }


            
            </span>
            <Select
              style={{ color: "white" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={country}
              onChange={(e) => {
                console.log(e.target.value)
                // setCountry(e.target.value);
              
                router.push({
                  pathname: '/startup-list',
                  query:{
                    industry:industryname,
                    country:e.target.value,
                  }
                })

              }}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>

              {
                countries.map((country) => {
                  return <MenuItem value={country.name.common}>{country.name.common}</MenuItem>

                })
              }
            </Select>
            <div style={{ marginLeft: "-75px" }} className="flex mt-8">
              <Image className="ml-4 object-contain" src={Location} />
              <Image className="ml-4 object-contain" src={Share} />
              <Image className="ml-4 object-contain" src={Share2} />
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default protectedRoutes(IndustryView)