import React from 'react'
import Header from './component/header';
import Hero from './component/hero';
import Features from './component/features';
import Product from './component/products';
import Email from './component/email';
import Plantpot from './component/plantpot';
import Footer from './component/footer';

const Home = () => {
  return (
    <div>
      <Header logo={'Avion'} navLinks={[
          { label: "Plant pots", href: "/plantpot" },
          { label: "Ceramics", href: "/ceramics" },
          { label: "Tables", href: "/table" },
          { label: "Chairs", href: "/chairs" },
          { label: "Crockery", href: "/crockery" },
          { label: "Tableware", href: "/tableware" },
          { label: "Cutlery", href: "/cutlery" },
      ]}/>
      <Hero/>
      <Features/>
      <Product/>
      <Email/>
      <Plantpot/>
      <Footer/>
    </div>
  )
}

export default Home