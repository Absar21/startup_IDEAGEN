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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from "react";
import Book from "../public/health.png";
import Country from "../public/Japan.png"
import axios from "axios";
import { useRouter } from "next/router";

const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];

export default function CountryList() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const router=useRouter();
  const industryname=router.query.industryname;

  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([])

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
        <Image className="bg-indimg bgimg bg-img" src={BGindustry2} />

        <Image className="bg-indimg bgimg bg-img" src={BGindustry2} style={{height:'70vh'}} />
      </div>
      <Image className=" w-full bg-industry" src={BGindustry} />

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Login
      </div>

      <div style={{ paddingTop: "300px !important" }} className="grid country lg:grid-cols-6 md:grid-cols-2">
        <Select
          style={{ color: "black" }}
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

        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 country md:grid-cols-2">
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 country md:grid-cols-2">
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
      </div>
      <div className="grid lg:grid-cols-6 country md:grid-cols-2">
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
        <div>
          <Image src={Country} />
        </div>
      </div>
    </div>
  );
}
