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

export default function StartUpConstruction() {
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
      <Image className="bg-img" src={BackgroundImage} />

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Login
      </div>
      <div className="grid grid-cols-2 gap-8 p-20 pb-0">
        <div>
          <div className="font-normal text-3xl leading-9 text-black">
            Construction Site
          </div>
          <div
            className="not-italic font-light text-lg leading-5"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            some of the most profitable types of construction business in
            Canada. You can start it from your Area.
          </div>
        </div>
        <div>
          <Image className="imageStyling" src={Map} />
        </div>
      </div>
      <div className="grid grid-cols-2 p-20 pt-0 pb-0 custom-box2">
        <div className="custom-border">
          <div className="not-italic font-normal text-xl leading-6 text-black mt-10">
            Overview
          </div>
          <div className="not-italic font-normal text-xl leading-6 text-blue-600 mt-10">
            Advantages
          </div>
          <div className="not-italic font-normal text-xl leading-6 text-black mt-10">
            Disadvantages
          </div>
        </div>
        <div
          style={{ marginLeft: "-200px" }}
          className="mt-10 not-italic font-normal text-3xl leading-9 text-black"
        >
          Descripton
          <div
            className="not-italic font-light text-lg leading-5 mt-8"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            1)industry size<br /> <br /> Construction remains a growing industry thanks to a
            growing population and aging buildings, according to the Bureau of
            Labor Statistics. The number of construction-industry workers is
            expected to grow by 19 percent through 2018, compared with 11
            percent for other industries. Construction is expected to grow for
            both new work and retrofitting work on older buildings, highways and
            bridges.<br /> <br />2)specialization <br /> <br /> Construction offers the opportunity for
            specialization in order to compete more effectively with other
            businesses. While some companies operate by offering
            general-contracting services, others specialize in new work, “green”
            construction, civic building or residential housing. Specializing
            allows companies to streamline production so that workers become
            more adept and familiar with processes, contributing to efficiency
            and safety.<br /> <br /> 3) community <br /> <br /> Starting a construction company has another
            advantage: making a positive impact in the community. Construction
            companies build homes for growing families, and create large civic
            structures, libraries, schools, museums and hospitals. They also
            work to keep bridges and roads safe for commuters. Your successful
            construction company can help shape the town’s visual appeal,
            attracting tourists and providing pleasant places for residents to
            enjoy. <br /><br /> 4) start small <br /> <br /> Construction businesses can get started with a
            small number of employees working on small- to moderately-sized
            projects, hiring additional labor only when needed to complete
            larger work. Keeping monthly overhead costs low helps new
            construction businesses to make competitive bids compared to larger
            businesses, which must rely on higher pricing to support hefty
            overhead costs.
          </div>
        </div>
      </div>
    </div>
  );
}
