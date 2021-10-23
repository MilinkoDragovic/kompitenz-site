import * as React from "react"
import Development from "../components/Development"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Techonologies from "../components/Technologies"
import FeatureServices from "../components/FeatureServices"
import HeroSlider from "../components/HeroSlider"
import SideImage from "../components/SideImageContent"
import FeaturesWidget from "../components/Features"
import ProjectsWidget from "../components/Projects"
import RequestForm from "../components/RequestForm"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSlider />
    <FeatureServices />
    <Techonologies />
    <Development heading="Our Services" />
    <SideImage />
    <FeaturesWidget />
    <ProjectsWidget />
    <Testimonials />
    <RequestForm />
  </Layout>
)

export default IndexPage
