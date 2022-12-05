import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import PlausibleProvider from "next-plausible"

const Home: NextPageWithLayout = () => {
  return (
    <PlausibleProvider domain="natahome.com" customDomain="analytics.psalido.net" selfHosted>    
      <Head
        title="Home"
        description="Shop all available models only at the Natahome. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <FeaturedProducts />
    </PlausibleProvider>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
