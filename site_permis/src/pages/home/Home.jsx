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
import ContactSection from '../../components/contact-section/ContactSection';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </Box>
  );
};

export default Home;
