import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { Router } from 'next/router';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const MyApp = function ({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  useEffect(() => {
    document.body.classList.add('body-scroll');
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  return (
    <>
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lateef&family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
