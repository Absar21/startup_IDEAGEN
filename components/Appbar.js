

import React from "react";
import Image from "next/image";
import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";
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
import { useState, useContext } from "react";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";
import LogoBlack from "../public/blackLogo.png";
import TextBlack from "../public/Vector.png";
import Pixel from "../public/pexels-cottonbro-studio-3205568 1.png";
import Pixel2 from "../public/Group_12757.png";
import Border from "../public/Group_12746.png";
import Pixel25 from "../public/pexels-akwice-3094799 1.png";
import { useRouter } from "next/router";
import { signOut, getAuth } from "firebase/auth";
import useAuth from "../context/authcontext";
import {protectedRoutes} from "../ProtectedRoutes"
import { useEffect } from "react"

const pages = ["HOME", "Pricing", "About", "CONTACT"];

export default function NewAppBar() {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const router = useRouter();
    const {user,logout}=useAuth();
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [authState, setAuthState] = useState(false);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return( <Container  className="appcontainer">
    <Toolbar disableGutters style={{backgroundColor:"red"}}>
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
    );
}