import * as React from "react";
import { PageProps } from "gatsby";
import Header from "../components/header/header.component";
import Layout from "../components/layout/layout.component";
import Hero from "../components/hero/hero.component";

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Header />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
