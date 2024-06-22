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

import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {

    generate_ExitStrategy,

} from "../openai/openaiconfig";

const pages = ["HOME", "Pricing", "About", "CONTACT"];


let i = true;

export default function ExitStratComponent(props) {







    return (
        <div
        className="mt-10 not-italic font-normal text-3xl leading-9 text-white desc-component" 
     >
            Exit strategy



            <div
                className="not-italic font-light text-lg leading-5 mt-3"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
            >

                {
                   props.strategy}
            </div>
        </div>
    );
}
