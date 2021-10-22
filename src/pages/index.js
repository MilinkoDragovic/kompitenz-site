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
import HeroSlider from "../components/HeroSlider"
import SideImage from "../components/SideImageContent"
import FeaturesWidget from "../components/Features"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Hero /> */}
    <HeroSlider />
    <FeatureServices />
    <Techonologies />
    <HomeServiceSection heading="Our Services" />
    <SideImage />
    <FeaturesWidget />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
