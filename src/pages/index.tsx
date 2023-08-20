import Head from 'next/head'
import HeroBanner from "@/components/HeroBanner"
import Catalog from "@/components/Catalog"
import PopularProduct from "@/components/PopularProduct"
import Offer from "@/components/Offer"
import NewProduct from "@/components/NewProduct"
import FeaturedProducts from "@/components/FeaturedProducts"

export default function Home() {
  return (
    <>
      <Head>
        <title>Wireless Tech - Your Destination for Mobile Phones and Repairs</title>
        <meta name="description"
          content="Explore a wide range of mobile phones, PC, laptop repairs, and accessories at Wireless Tech. We offer top-notch repair services and phone unlocking. Find the latest products and deals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HeroBanner />
        <Offer />
        <Catalog />
        <PopularProduct />
        <NewProduct />
        <FeaturedProducts />
      </main>
    </>
  )
}
