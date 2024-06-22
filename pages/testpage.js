import React from 'react';
import axios from "axios";
import { generate_IdeaFromAbstract } from '../openai/openaiconfig';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function TestPage() {
  let [data, setData] = useState([]);

  const router = useRouter();
  const keyword = router.query.keyword;


  const get_papers_data = async (keywords = "computer vision", offset = 0, num_results = 10) => {

    axios.get(`https://api.semanticscholar.org/graph/v1/paper/search?query=${keywords}&offset=${offset}&limit=${num_results}&fields=title,authors,abstract,s2FieldsOfStudy,year`).
      then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.data.length; i++) {
          generate_IdeaFromAbstract(res.data.data[i].abstract).then((reply) => {
            const obj = {
              abstract: res.data.data[i].abstract,
              idea: reply.data.choices[0].text,
            }

            setData(data => [{...data, obj}]);

          })
        }

      }).catch((err) => {
        console.log(err);
      })




  }

  
  useEffect(() => {
    get_papers_data();
    console.log(data);


    if (keyword === "") {
     
    } else {
      
    }

  }, [])

  return (
    <div>{

      data.map((d)=>{
        console.log(d);
        return <></>
      })
    }</div>
  )
}
