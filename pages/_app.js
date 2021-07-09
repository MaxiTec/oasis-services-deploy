// import React, { Suspense } from "react";
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import '../src/styles/sass/index.sass';
import { wrapper } from '../redux/store';
// import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      titleTemplate="%s | Oasis Hoteles & Resorts"
      defaultTitle="Oasis Hoteles & Resorts"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: 'SiteName',
      }}
    />
    <Component {...pageProps} />
  </>
);
export default wrapper.withRedux(appWithTranslation(MyApp));
// export default appWithTranslation(MyApp);
