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
import { useRouter } from "next/router";
import { protectedRoutes } from "../ProtectedRoutes";
import {
  generate_Shortname, generate_Detaildesc,
  generate_ExitStrategy, generate_Leagality,
  generate_Scalability,
  generate_MarketPotential,
  generate_MarketCompetitors,
  generate_Innovation,


} from "../openai/openaiconfig";
import axios from "axios";

import DescComponent from "../components/descriptionComponent";
import PotentionalComponent from "../components/marketpotentioalComponent";
import CompetitorsComponent from "../components/competitorsComponent";
import InnovattionComponent from "../components/InnovatioComponent";
import ResearchPaperComponent from "../components/ResearchPapersComponent";
import ScalAbilityComponent from "../components/ScalabilityComponent";
import LegalityComponent from "../components/LegalityComponent";
import ExitStratComponent from "../components/exitStrategyComponent";
import useAuth from "../context/authcontext";
const pages = ["HOME", "Pricing", "About", "CONTACT"];


let i = 0;

 function StartupDescription() {


  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [strategy, setStretgy] = useState("")
  const [leg, setLeg] = useState("")
  const [scal, setScal] = useState("")
  const [data, setData] = useState([])
  const [poten, setPoten] = useState("")
  const [innovation, setInnovations] = useState("")
const {logout}=useAuth();


  const [competitors, setCompetitors] = useState("")




  const [page, setPage] = useState(<DescComponent desc={desc} />);


  const router = useRouter();
  const idea = router.query.idea;
  const country = router.query.country;




  useEffect(() => {

    generate_Shortname(idea).then((res) => {

      setTitle(res.data.choices[0].text.split("."));
    });
    generate_Detaildesc(idea).then((res) => {
      setDesc(res.data.choices[0].text);
      setPage(<DescComponent desc={desc} />)
    })



    generate_Scalability(idea, country).then((res) => {
      setScal(res.data.choices[0].text)

    })

    generate_Innovation(idea).then((res) => {
      setInnovations(res.data.choices[0].text)

    })





    generate_MarketCompetitors(idea).then((res) => {
      setCompetitors(res.data.choices[0].text)

    })



    generate_MarketPotential(idea).then((res) => {
      setPoten(res.data.choices[0].text)

    })




    generate_Leagality(idea, country).then((res) => {
      setLeg(res.data.choices[0].text)

    })
    generate_ExitStrategy(idea).then((res) => {
      setStretgy(res.data.choices[0].text
      )
    })


    let offset = 0, num_results = 10


    axios.get(`https://api.semanticscholar.org/graph/v1/paper/search?query=${idea}&offset=${offset}&limit=${num_results}&fields=title,authors,abstract,s2FieldsOfStudy,year`).
      then((res) => {
        if (res.data.total>0) {

          for (let i = 0; i < 5; i++) {
            setData(data => [...data, res.data.data[i]?.title])
          }
        } else {
          setData([])
        }
      }).catch((err) => {
        console.log(err);
        alert(err)
      })







  }, [])

  useEffect(()=>{


    if(i===0 && desc)
    {
      generate_Detaildesc(idea).then((res) => {
      setDesc(res.data.choices[0].text);
      setPage(<DescComponent desc={desc} />)
      i++;
    })  
  }
  },[desc])


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
       
        className="not-italic descdiv absolute font-semibold text-6xl text-center text-white"
      >
        <Image src={BGindustry2} className="descbg2img"/>
      </div>
      <Image className="w-full" src={BGindustry} style={{height:'100vh'}}/>

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
        onClick={logout}
      >
        Logout
      </div>
      <div  className="overflow-y-auto scrollbar-hide desc-overflow-div">
        <div className="grid grid-cols p-5 pt-4">
          <div  className="desc-details">
            <div
            
              className="not-italic font-normal text-3xl leading-9 text-white mb-6  title-text"
            >
              {title}            </div>
            <span
             
              className="w-full mb-10 block not-italic font-light text-lg leading-5 text-white idea-text"
            >
              {
                idea
              }
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 description" >
          <div className="custom-border-2">
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-blue-600 mt-10 descpages" onClick={() => {
              setPage(<DescComponent desc={desc} />)
            }}>
              Description
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4 descpages" onClick={() => {

              setPage(<PotentionalComponent poten={poten} />)

            }}>
              Market Potential
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4 descpages" onClick={() => {
              setPage(<CompetitorsComponent com={competitors} />)
            }}>
              Competitors
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              setPage(<InnovattionComponent innovation={innovation} />)
            }}>
              Innovations
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              setPage(<ResearchPaperComponent data={data} />)
            }}>
              Related Research Paper
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              setPage(<ScalAbilityComponent scal={scal} />)
            }}>
              Scalability
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              setPage(<LegalityComponent legality={leg} />)
            }}>
              Legality and License
            </div>
            <div className="not-italic font-normal text-xl leading-6 cursor-pointer text-white mt-4" onClick={() => {
              setPage(<ExitStratComponent strategy={strategy} />)
            }}>
              Exit strategy
            </div>
          </div>
        <div className="desc-details">
        {page}
          </div>


        </div>
      </div>
    </div>
  );
}


export default protectedRoutes(StartupDescription)