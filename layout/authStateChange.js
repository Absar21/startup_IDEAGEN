import React from 'react'
import { useEffect } from 'react';
import { auth } from "../firebase";

import { onAuthStateChanged, getAuth } from 'firebase/auth';
import useAuth from '../context/authcontext';
import { useState } from 'react';
import { async } from '@firebase/util';
import { CircularProgress } from '@mui/material';

export default function AuthStateChanged({ children }) {
    const { setUser, user } = useAuth();
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
        const auth = getAuth();
        await onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setUser(user)
            console.log("Adas",user);
        })
    }, [])

    if (loading) {
        return <center style={{marginTop:"25%"}}>
            <CircularProgress />
        </center>
    }
    return children
}
