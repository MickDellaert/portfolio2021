import React from 'react';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (

      <Component {...pageProps} />

  );
};

export default MyApp;
