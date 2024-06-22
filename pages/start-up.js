import React from 'react'
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
import MenuItem from "@mui/material/MenuItem";
import LogoBlack from "../public/blackLogo.png";
import TextBlack from "../public/Vector.png";
import Location from "../public/Group 18.png";
import Share from "../public/Group 19.png";
import Share2 from "../public/Group 20.png";
import Map from "../public/pexels-rodolfo-quirós-2219024 1.png";
import BackgroundImage from "../public/startupbackground.png";
import { useState } from "react";


const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];

  



export default function StartUp() {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    return (
        <div>
                  <div className="flex">
        <Image className="logo" src={LogoBlack} />
        <Image className="logo2" src={TextBlack} />
      </div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      className="text-white hover:text-indigo-400"
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar alt="Remy Sharp" src={Logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
<Image className='bg-img' src={BackgroundImage} />

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Login
      </div>
      <div className='grid grid-cols-2 gap-8 p-20 pb-0'>
        <div>
      <div className='font-normal text-3xl leading-9 text-black'>
      Construction Site
      </div>
      <div className='not-italic font-light text-lg leading-5' style={{color:"rgba(0, 0, 0, 0.6)"}}>
      some of the most profitable types of construction business in Canada. You can start it from your Area.
      </div>
      </div>
      <div>
        <Image className='imageStyling' src={Map} />
      </div>
      </div>
      <div className='grid grid-cols-2 p-20 pt-0 pb-0 custom-box2'>
        <div className='custom-border'>
        <div className='not-italic font-normal text-xl leading-6 text-blue-600 mt-10'>
        Overview
        </div>
        <div className='not-italic font-normal text-xl leading-6 text-black mt-10'>
        Advantages
        </div>
        <div className='not-italic font-normal text-xl leading-6 text-black mt-10'>
        Disadvantages
        </div>
        </div>
        <div style={{marginLeft:"-200px"}} className='mt-10 not-italic font-normal text-3xl leading-9 text-black'>
        Descripton
        <div className='not-italic font-light text-lg leading-5 mt-8' style={{color:"rgba(0, 0, 0, 0.6)"}}>
        Construction Business in Pakistan is ever-booming with the current facilities provided by the Government. The construction industry has witnessed a sharp positive trend in its growth. Consequently, the house construction business in Pakistan has also been uplifted. In the present condition, when Prime Minister Imran Khan is taking a personal interest to uplift the economy, the construction sector is the center of his interest.
So, starting a construction business in Pakistan is considered most favoured at the moment. Due to the government efforts and overall business-pro environment, ensures high-profit margin in the construction business in Pakistan. Sky Marketing brings you some crucial information about this industry, and after going through the content, you will be convinced to start a construction business in Pakistan.
        </div>
        <div className='mt-10 not-italic font-normal text-3xl leading-9 text-black'>
        Following are 10 Steps to build a construction business in Pakistan:
        <div className='not-italic font-light text-lg leading-5 mt-8' style={{color:"rgba(0, 0, 0, 0.6)"}}>
        Come up with a concrete business plan
Find a prime location for your office
Hire a professional legal team
Get a comprehensive understanding of Tax requirements
Get an understanding of Insurance understanding about your startup
Secure finances for your business
Develop contacts with suppliers, business associates, contractors, government officials, and other related contacts
Hire the best team to run your operations
Dedicate an advertisement and marketing budget
Allocate budget for software and website development
The growing construction business has now become convenient in Pakistan. The requirement of IT in the real estate sector has become an imminent part. The owners of the property business in Pakistan have realized that this is a digital era, and technology in the industry could be useful. The need for IT technical staff has also increased manifold.
        </div>
        </div>
        </div>

      </div>
        </div>
    )
}
