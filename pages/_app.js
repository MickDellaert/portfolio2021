import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (

      <Layout>
        <Component {...pageProps} />
      </Layout>

  );
};

export default MyApp;
