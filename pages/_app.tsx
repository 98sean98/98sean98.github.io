import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hi I&#39;m Sean!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Sean Chok" />
        <meta
          property="og:description"
          content="Sean's shameless collection of random stuff"
        />
        <meta property="og:title" content="Hi, I'm Sean!" />
        <meta property="og:image" content="%PUBLIC_URL%/og_image.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
