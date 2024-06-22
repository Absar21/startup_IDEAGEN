import Head from "next/head";
import "../styles/globals.css";
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import {AuthProvider} from "../context/authcontext"
import AuthStateChanged from "../layout/authStateChange";

// own css files here
// import "../css/customcss.css";

export default function App({ Component, pageProps }) {


  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <AuthProvider>
      <AuthStateChanged>
      <Component {...pageProps} />

      </AuthStateChanged>


    </AuthProvider>
  </>
}
