import * as React from "react"
import Hero from "../components/Hero"
import HomeServiceSection from "../components/HomeServiceSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Clients from "../components/Clients"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Clients />
    <HomeServiceSection heading="Our Services" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
