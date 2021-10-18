import * as React from "react"
import Hero from "../components/Hero"
import HomeServiceSection from "../components/HomeServiceSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Techonologies from "../components/Technologies"
import FeatureServices from "../components/FeatureServices"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <FeatureServices />
    <Techonologies />
    <HomeServiceSection heading="Our Services" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
