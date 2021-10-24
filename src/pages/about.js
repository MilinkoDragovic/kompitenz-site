import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import AboutPageText from "../components/AboutPageText";
import AboutCards from "../components/AboutCards";

const AboutPage = () => (
  <Layout>
    <Seo title="Wieso Kompitenz" />
    <PageHeader heading="Wieso Kompitenz" subheading="Software für das digitale zeitalter" />
    <AboutCards />
    <AboutPageText />
  </Layout>
)

export default AboutPage
