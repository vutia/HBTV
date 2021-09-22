import 'styles/globals.css';

import Layout from 'components/layout/Layout';
import Head from 'next/head';

import { Provider } from 'next-auth/client';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
        <meta
          property="og:title"
          content="HBTV - watch TV shows online, watch movies online"
        />
        <meta
          property="og:image"
          content="https://hbtv.vercel.app/images/misc/background.jpg"
        />
        <meta
          property="og:description"
          content="Homeboyz TV is a premium subscription and video on demand platform showcasing original pre recorded content as well as live streamed music and sports events."
        />
        <meta property="og:url" content="https://hbtv.vercel.app/" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
