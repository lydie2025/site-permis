import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import About from '../../components/about/About';
import Temoignages from '../../components/temoignage/Temoignages';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Temoignages />
      <Footer />
    </Box>
  );
};

export default Home;
