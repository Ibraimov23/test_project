import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../theme/style.scss';
import Head from 'next/head'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
           <title>Test.io</title>
           <meta charSet="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
         <Component {...pageProps} />
    </>
  );
}

export default MyApp
