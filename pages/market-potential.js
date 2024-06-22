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
import { useState, useEffect } from "react";
import Book from "../public/health.png";
import { useRouter } from "next/router";

import {
  generate_Shortname, generate_Detaildesc,
  generate_MarketPotential,


} from "../openai/openaiconfig";
const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];

let i = true

export default function MarketPotential() {
  const router = useRouter();
  const name = router.query.name;
  const idea = router.query.idea;
  const [poten, setPoten] = useState("")
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (i) {



      generate_MarketPotential(idea).then((res) => {
        setPoten(res.data.choices[0].text)

      })


      i = false
    }
  }, [])
  return (
    <div style={{ height: "800px" }}>
      <div className="flex">
        <Image className="logo" src={Logo} />
        <Image className="logo2" src={LogoText} />
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
      <div
        style={{ top: "160px", left: "120px" }}
        className="not-italic absolute font-semibold text-6xl text-center text-white"
      >
        <Image className="bg-indimg bgimg bg-img" src={BGindustry2} style={{height:'70vh'}} />
      </div>
      <Image className=" w-full bg-industry" src={BGindustry} />

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Login
      </div>
      <div className="bg-des">
        <div className="grid grid-cols-2 p-10 pt-4">
          <div style={{ marginLeft: "70px" }}>
            <div
              style={{ marginLeft: "75px" }}
              className="not-italic font-normal text-3xl leading-9 text-white mb-6"
            >
              {name}            </div>
            <span
              style={{ marginLeft: "75px" }}
              className="w-full mb-10 block not-italic font-light text-lg leading-5 text-white"
            >
              {idea}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 description">
          <div className="custom-border-2">
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-10" onClick={() => {
              router.push({
                pathname: "/startup-description",
              });
            }}>
              Description
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-blue-600 mt-4" onClick={() => {
              router.push({
                pathname: "/market-potential",
              });
            }}>
              Market Potential
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              router.push({
                pathname: "/competitors",
                query: {
                  name: name,
                  idea: idea
                }
              });
            }}>
              Competitors
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              router.push({
                pathname: "/innovations",
              });
            }}>
              Innovations
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              router.push({
                pathname: "/search-paper",
              });
            }}>
              Related Research Paper
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4">
              Scalability
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4">
              Legality and License
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4">
              Exit strategy
            </div>
          </div>
          <div
            style={{ marginLeft: "-150px" }}
            className="mt-10 not-italic font-normal text-3xl leading-9 text-white"
          >
            Market Potential
            <div
              className="not-italic font-light text-lg leading-5 mt-3"
              style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >
              {
                poten
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
