import React from 'react';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

import '@redq/reuse-modal/lib/index.css';
import 'styles/app.scss';
import 'nprogress/nprogress.css';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from 'containers/AppLayout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;