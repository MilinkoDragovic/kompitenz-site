import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import AboutPageText from "../components/AboutPageText";

const AboutPage = () => (
  <Layout>
    <Seo title="Wieso Kompitenz" />
    <PageHeader heading="Wieso Kompitenz" subheading="Software für das digitale zeitalter" />
    <AboutPageText />
  </Layout>
)

export default AboutPage
