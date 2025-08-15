import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import { Box } from '@mui/material';
import Temoignages from '../../components/temoignage/Temoignages';

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <Temoignages />
      <Footer />
    </Box>
  );
};

export default Home;
