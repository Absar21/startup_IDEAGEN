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
import Map from "../public/world-map-png-17 2.png";
import BackgroundImage from "../public/download 1.png";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const pages = ["HOME", "ABOUT", "AI DEVELOPMENT", "APPLICATIONS", "CONTACT"];

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
  ];


export default function CurrentLocation() {
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
      <div
        className="p-8 pt-6 absolute text-center text-white"
        type="submit"
        style={{
          top: "385px",
          left: "40px",
          width: "300px",
          border: "2px solid #FFFFFF",
          height: "40px",
          paddingTop: "12px",
          paddingBottom: "40px",
          borderRadius: "42px",
        }}
      >
        Search Another Place
      </div>
<Image className='bg-img' src={BackgroundImage} />

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
      >
        Login
      </div>
      <div className='grid grid-cols-2 gap-8 p-20'>
        <div>
      <div className='font-normal text-3xl leading-9 text-black'>
      4-98 Thirteenth St, Etobicoke, ON <br />M8V 3H6, Canada
      </div>
      <div className='not-italic font-light text-lg leading-5' style={{color:"rgba(0, 0, 0, 0.6)"}}>
      At capital 45 we have a wealth of experience in developing stand-alone and integrated AI solutions developed by researchers and experts.
We not only help to find startups, but also the guidance and expertise needed to succeed.
      </div>
      <div className='flex mt-8'>
        <Image className='ml-4 object-contain' src={Location} />
        <Image className='ml-4 object-contain' src={Share} />
        <Image className='ml-4 object-contain' src={Share2} />
      </div>
      </div>
      <div>
        <Image src={Map} />
      </div>
      </div>
      <div className='trendingBtns'>
        <Button className='bg-gray-300 font-normal text-lg leading-6 text-black'>
        Trending 
        </Button>
        <Button className='bg-transparent font-normal text-lg leading-6 text-black'>
        Top  
        </Button>
      </div>
      <div className='p-20'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
        </div>
    )
}
