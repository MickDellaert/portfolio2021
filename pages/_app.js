import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>

        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
    </>
  );
};

export default MyApp;
