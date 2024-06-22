import React, { Component } from 'react'
import useAuth from './context/authcontext'
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

export  function publicRoutes(Component) {
  // above is a function which is returning a component
  return function PublicROutes(props){
    const router=useRouter();

    const auth=useAuth();
    if(auth.user){
       router.push("/");
       return <center style={{marginTop:"25%"}}>
       <CircularProgress />
   </center>
    }
    return <Component {...props} />
  }
}
