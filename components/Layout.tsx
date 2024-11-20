import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>{props.title || "GalaxyBuilder-Oss"}</title>
      <meta
        name="description"
        content={props.description || "this is about GalaxyBuilder-Oss Page"}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div>
      <Header />
      <div className="layout">{props.children}</div>
      <Footer />
    </div>
  </>
);

export default Layout;
