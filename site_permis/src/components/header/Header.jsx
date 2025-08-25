import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { DirectionsCar, School, Assignment, Support } from '@mui/icons-material';
import logo from '../../assets/logo.jpg';
import './header.css';

const Header = () => {
  return (
    <Box className="header" sx={{ 
      backgroundColor: 'white', 
      height: '80px', // Hauteur fixe
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(22, 72, 161, 0.1)'
    }}>
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100%',
          gap: 2
        }}>
          {/* Logo et nom de l'entreprise */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{
              width: 50,
              height: 50,
              background: 'linear-gradient(135deg, #1648a1 0%, #9f4b62 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: '0 4px 20px rgba(22, 72, 161, 0.3)',
              overflow: 'hidden'
            }}>
              <img 
                src={logo} 
                alt="Global Car Consulting Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '12px'
                }} 
              />
            </Box>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 'bold', 
                color: '#1a1a1a',
                fontSize: { xs: '1.5rem', md: '2rem' },
                lineHeight: 1.2
              }}>
                GLOBAL CAR
              </Typography>
              <Typography variant="h6" sx={{ 
                color: '#9f4b62', 
                fontWeight: '600',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.2
              }}>
                CONSULTING
              </Typography>
            </Box>
          </Box>

          {/* Informations clés */}
          <Stack direction="row" spacing={3} sx={{ 
            display: { xs: 'none', lg: 'flex' },
            alignItems: 'center'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <DirectionsCar sx={{ fontSize: 28, color: '#1648a1', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: '600', fontSize: '0.875rem' }}>
                Permis & Carte Grise
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <School sx={{ fontSize: 28, color: '#1648a1', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: '600', fontSize: '0.875rem' }}>
                Auto-École
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Assignment sx={{ fontSize: 28, color: '#1648a1', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: '600', fontSize: '0.875rem' }}>
                Dédouanement
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Support sx={{ fontSize: 28, color: '#1648a1', mb: 0.5 }} />
              <Typography variant="body2" sx={{ fontWeight: '600', fontSize: '0.875rem' }}>
                Accompagnement
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
