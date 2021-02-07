import * as React from "react";
import { PageProps } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "../components/header/header.component";
import Layout from "../components/layout/layout.component";
import Hero from "../components/hero/hero.component";
import Motto from "../components/motto/motto.component";
import Footer from "../components/footer/footer.component";
import TextSection from "../components/textSection/textSection.component";
import SectionRow from "../components/sectionRow/sectionRow.component";
import SectionHeader from "../components/sectionHeader/sectionHeader.component";
import Testimonial from "../components/testimonial/testimonial.component";
import TestimonialSections from "../components/testimonialSection/testimonialSection.component";
import CursorFollower from "../components/cursorFollower/cursorFollower.component";
import DevelopmentDecor from "../components/developmentDecor/developmentDecor.component";

const IndexPage = (props: PageProps) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>zappie - React Native & UI/UX Agency</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CursorFollower />
      <Header />
      <Hero />
      <Motto />
      <SectionHeader
        title={
          <span>
            Startups build their
            <br />
            tech teams with zappie
          </span>
        }
        category={<span>Service</span>}
        description={<span>We are here to support your growth</span>}
      />
      <SectionRow
        left={<DevelopmentDecor />}
        right={
          <TextSection
            title={"Development"}
            description={
              "We balance smooth user experience with a good‑looking user interface to build a product that wows your customers. In our work."
            }
          />
        }
      />
      <SectionRow
        left={
          <TextSection
            title={"Design"}
            description={
              "We balance smooth user experience with a good‑looking user interface to build a product that wows your customers. In our work, we not only focus on making it easy for your customers."
            }
          />
        }
        right={<></>}
      />

      <SectionHeader
        title={
          <span>
            What our clients
            <br />
            say about us
          </span>
        }
        category={<span>Testimonials</span>}
      />

      <TestimonialSections
        testimonials={[
          <Testimonial
            description={
              <span>
                They have been able to complete everything
                <br />
                that we threw at them so far both fast and
                <br />
                economically.
              </span>
            }
            author={{
              avatarSrc: "https://www.w3schools.com/w3images/avatar2.png",
              name: "Ronald Richards",
              title: "CTO of Pinterest",
            }}
          />,
          <Testimonial
            description={
              <span>
                They have been able to complete everything
                <br />
                that we threw at them so far both fast and
                <br />
                economically.
              </span>
            }
            author={{
              avatarSrc: "https://www.w3schools.com/w3images/avatar2.png",
              name: "Ronald Richards",
              title: "CTO of Pinterest",
            }}
          />,
        ]}
      />

      <Footer />
    </Layout>
  );
};

export default IndexPage;
