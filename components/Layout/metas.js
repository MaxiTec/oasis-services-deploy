import Head from 'next/head';
const MetaTags = () => {
  return (
    <Head>
      {/* Prubas de inconos, Poner los correctos */}
      {/* <link rel='apple-touch-icon' sizes='180x180' href='favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
      <link rel='manifest' href='favicon/site.webmanifest' /> */}

      {/* <link rel='mask-icon' href='cuaj.ico' color='#5bbad5' /> */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default MetaTags;
