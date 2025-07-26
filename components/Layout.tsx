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
      
    </Head>
    <div className="layout">{props.children}</div>
  </>
);

export default Layout;
