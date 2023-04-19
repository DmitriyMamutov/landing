import { Head, Html, Main, NextScript } from "next/document";
import { FAVICON } from "config/common";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={FAVICON} />
        <link
          rel="preload"
          href="/static/fonts/Moderat/Moderat-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/Moderat/Moderat-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
