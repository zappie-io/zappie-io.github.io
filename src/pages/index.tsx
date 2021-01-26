import * as React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header/header.component";
import Layout from "../components/layout/layout.component";
import Hero from "../components/hero/hero.component";
import Motto from "../components/motto/motto.component";
import Footer from "../components/footer/footer.component";

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Hero />
      <Motto />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
