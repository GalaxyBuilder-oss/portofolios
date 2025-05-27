import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="Deskripsi singkat website kamu" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://galaxybuilder.vercel.app/" />
            <link rel="stylesheet" href="/styles/global.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
