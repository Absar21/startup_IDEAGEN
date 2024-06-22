import React from 'react'
import useAuth from './context/authcontext'
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
export function protectedRoutes(Component) {
    return function ProtectedRoutes(props) {
        const router = useRouter();
        const { user } = useAuth();
        if (user==null) {
            router.push("/login");
            return<center style={{marginTop:"25%"}}>
            <CircularProgress />
        </center>
        }
        return <Component {...props} />

    }
}
