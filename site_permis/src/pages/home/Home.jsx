import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import ServicesSection from '../../components/services-section/ServicesSection';
import AboutSection from '../../components/about-section/AboutSection';
import CTASection from '../../components/cta-section/CTASection';
import Footer from '../../components/footer/Footer';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      overflow: 'hidden'
    }}>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
};

export default Home;
