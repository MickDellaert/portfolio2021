import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ParallaxProvider } from 'react-scroll-parallax';


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
        <ParallaxProvider>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
