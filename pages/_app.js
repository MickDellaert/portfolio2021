import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import Test from "../components/test";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
