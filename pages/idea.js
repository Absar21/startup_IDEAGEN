import React from "react";
import BGindustry from "../public/Global_-_45954_1.png";
import BGindustry2 from "../public/Rectangle_6243.png";
import Image from "next/image";
import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";

import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import {protectedRoutes} from "../ProtectedRoutes"
import { generate_IdeaFromAbstract } from '../openai/openaiconfig';
import useAuth from "../context/authcontext";


import Book from "../public/material-symbols_add-box-outline.png";
import Star from "../public/material-symbols_star-half-rounded.png";


import { useRouter } from "next/router";

 function Idea() {
  let [data, setData] = useState([]);
  const router = useRouter();
  const keyword = router.query.keyword;
  const {logout}=useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let paperdata = [];

  const get_papers_data = async (offset = 0, num_results = 10) => {

    axios.get(`https://api.semanticscholar.org/graph/v1/paper/search?query=${keyword}&offset=${offset}&limit=${num_results}&fields=title,authors,abstract,s2FieldsOfStudy,year`).
      then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          generate_IdeaFromAbstract(res.data.data[i].abstract).then((reply) => {

            // console.log(reply.data.choices[0]);

            const obj = {
              abstract: res.data.data[i].abstract,
              idea: reply.data.choices[0].text,
            }
            paperdata.push(obj);
            setData(data => [...data, obj]);



          })
        }


      }).catch((err) => {
        console.log(err);
      })


  }

  useEffect(() => {
    get_papers_data()
  }, [])

  return (
    <>
    <div style={{ height: "100vh" }}>
      <div className="flex">
        <Image alt="" className="logo" src={Logo} />
        <Image alt="" className="logo2" src={LogoText} />
      </div>
     
      <div
        className="not-italic absolute font-semibold text-6xl text-center text-white idea-div"
      >
        <Image src={BGindustry2} className="idea-bg-img"/>
      </div>
      <Image className="w-full" src={BGindustry} style={{height:'100vh'}}/>

      <div
        className="p-8 pt-6 loginBtn absolute text-center text-white"
        type="submit"
        onClick={logout}
      >
        Logout
      </div>
      <div className="bg-des  overflow-y-auto scrollbar-hide   ideascrolldiv"  >
        <div className="grid idea grid-cols-2">
          <div className="not-italic font-normal text-sm leading-4 text-white">
            PAPER
          </div>
          <div className="not-italic font-normal text-sm leading-4 text-white ml-10">
            IDEA
          </div>
        </div>
        {
          data.map((item) => {
            return item.abstract ? <div className="grid grid-cols-2 idea gap-8">
              <div className="not-italic font-light text-lg leading-5 text-white mr-10">
                <Image alt="" className="star" src={Star} />
                {
                  item.abstract
                }
                <br />
                <div className="flex p-10 pl-0">
                  <Button className="idea-btn ml-2 text-white">
                    Textile
                  </Button>
                  <Button className="idea-btn ml-2 text-white">
                    Education
                  </Button>
                  <Image alt="" className="object-contain ml-2" src={Book} />
                </div>
              </div>
              <div className="not-italic font-light text-lg leading-5 text-white ml-10" onClick={()=>{
                router.push({
                  pathname:"/startup-description",
                  query:{
                    idea:item.idea,
                    country:"the world"
                  }
                })
              }}>
                {item.idea}
              </div>
            </div> : ""
          })
        }

      </div>
    </div>
    </>
  );
}

export default protectedRoutes(Idea)

















// import React from "react";
// import BGindustry from "../public/Global_-_45954_1.png";
// import BGindustry2 from "../public/Rectangle_6243.png";
// import Image from "next/image";
// import LogoText from "../public/dfd7a935-9979-4076-b2dc-705e50786b53.png";

// import Logo from "../public/da6d08cf-9cdd-4932-8e85-86d018188eae.png";

// import Button from "@mui/material/Button";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {protectedRoutes} from "../ProtectedRoutes"
// import { generate_IdeaFromAbstract } from '../openai/openaiconfig';
// import useAuth from "../context/authcontext";


// import Book from "../public/material-symbols_add-box-outline.png";
// import Star from "../public/material-symbols_star-half-rounded.png";


// import { useRouter } from "next/router";

//  function Idea() {
//   let [data, setData] = useState([]);
//   const router = useRouter();
//   const keyword = router.query.keyword;
//   const {logout}=useAuth();

//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   let paperdata = [];

//   const get_papers_data = async (offset = 0, num_results = 10) => {

//     axios.get(`https://api.semanticscholar.org/graph/v1/paper/search?query=${keyword}&offset=${offset}&limit=${num_results}&fields=title,authors,abstract,s2FieldsOfStudy,year`).
//       then((res) => {
//         for (let i = 0; i < res.data.data.length; i++) {
//           generate_IdeaFromAbstract(res.data.data[i].abstract).then((reply) => {

//             // console.log(reply.data.choices[0]);

//             const obj = {
//               abstract: res.data.data[i].abstract,
//               idea: reply.data.choices[0].text,
//             }
//             paperdata.push(obj);
//             setData(data => [...data, obj]);



//           })
//         }


//       }).catch((err) => {
//         console.log(err);
//       })


//   }

//   useEffect(() => {
//     get_papers_data()
//   }, [])

//   return (
//     <>
//     <div style={{ height: "100vh" }}>
//       <div className="flex">
//         <Image alt="" className="logo" src={Logo} />
//         <Image alt="" className="logo2" src={LogoText} />
//       </div>
     
//       <div
//         className="not-italic absolute font-semibold text-6xl text-center text-white idea-div"
//       >
//         <Image src={BGindustry2} className="idea-bg-img"/>
//       </div>
//       <Image className="w-full" src={BGindustry} style={{height:'100vh'}}/>

//       <div
//         className="p-8 pt-6 loginBtn absolute text-center text-white"
//         type="submit"
//         onClick={logout}
//       >
//         Logout
//       </div>
//       <div className="bg-des  overflow-y-auto scrollbar-hide   ideascrolldiv"  >
//         <div className="grid idea grid-cols-2">
//           <div className="not-italic font-normal text-sm leading-4 text-white">
//             PAPER
//           </div>
//           <div className="not-italic font-normal text-sm leading-4 text-white ml-3">
//             IDEA
//           </div>
//         </div>
//         {
//           data.map((item) => {
//             return item.abstract ? <div className="grid grid-cols-2 idea gap-8">
//               <div className="not-italic font-light text-lg leading-5 text-white">
//                 <Image alt="" className="star" src={Star} />
//                 {
//                   item.abstract
//                 }
//                 <br />
//                 <div className="flex p-10 pl-0">
//                   <Button className="idea-btn ml-2 text-white">
//                     Textile
//                   </Button>
//                   <Button className="idea-btn ml-2 text-white">
//                     Education
//                   </Button>
//                   <Image alt="" className="object-contain ml-2" src={Book} />
//                 </div>
//               </div>
//               <div className="not-italic font-light text-lg leading-5 text-white" onClick={()=>{
//                 router.push({
//                   pathname:"/startup-description",
//                   query:{
//                     idea:item.idea,
//                     country:"the world"
//                   }
//                 })
//               }}>
//                 {item.idea}
//               </div>
//             </div> : ""
//           })
//         }

//       </div>
//     </div>
//     </>
//   );
// }

// export default protectedRoutes(Idea)