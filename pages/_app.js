import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>

      <ParallaxProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
