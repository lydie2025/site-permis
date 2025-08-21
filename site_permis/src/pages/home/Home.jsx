import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Temoignages from '../../components/temoignage/Temoignages';
import { Box } from '@mui/material';
import AboutSection from '../../components/about-section/AboutSection';
import ServicesSection from '../../components/services-section/ServicesSection';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Temoignages />
      <Footer />
    </Box>
  );
};

export default Home;
