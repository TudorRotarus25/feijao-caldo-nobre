import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import AboutUs from '../components/AboutUs/AboutUs';
import OurSpace from '../components/OurSpace/OurSpace';
import ContactUs from '../components/ContactUs/ContactUs';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Products />
    <AboutUs />
    <OurSpace />
    <ContactUs />
  </Layout>
);

export default IndexPage;
