import { Password } from '@mui/icons-material';
import React, { createContext, useContext, useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Toastify from "toastify-js";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import "toastify-js/src/toastify.css";

export const AuthContext = createContext();

export default function useAuth(){
  return useContext(AuthContext)
}

export  function AuthProvider({ children }) {
  const successToast = (message) => {
    Toastify({
      text: message,
      position: "right",
      className: "info",
      offset: {
        x: 0,
        y: 40,
      },
      style: {
        background: "#AAE460",
        color: 'black'
      },
    }).showToast();
  }

  const warningToast = (message) => {
    Toastify({
      text: message,
      position: "center",
      className: "info",
      offset: {
        x: 0,
        y: 40,
      },
      style: {
        background: "red",
        color: 'black'
      },
    }).showToast();
  }


  const router = useRouter();
  const [user,setUser]=useState(null);
  const [error,setError]=useState("");




  const login = async (email, password) => {
    console.log("context", email, password);
    await signInWithEmailAndPassword(auth, email, password).then((res) => {


      if (res.user) {
        console.log("in login ",res.user)

        setUser(res.user)

        successToast("welcome " + res.user.displayName);
        // router.push("/");


      }
    }).catch((error) => {
      setError(error)
      console.log(error);
      warningToast(error.message)
    })
  }


  const logout=async()=>{
    console.log("sdasssda")
    var auth = getAuth();
    if (auth.currentUser!==null) {
      signOut(auth).then(() => {
        console.log("Success");
        setUser(null)
        // router.push("/login")
      }).catch(err => { });
  }
  }



  const values={
    user,login,logout,setUser
  }

  return <AuthContext.Provider children={children} value={values} />
   

}


