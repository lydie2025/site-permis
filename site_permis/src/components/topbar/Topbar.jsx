import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './tapbar.css';

const Topbar = () => {
  return (
    <Box className="topbar" sx={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      py: 1,
      display: { xs: 'none', md: 'block' }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Informations de contact */}
          <Stack direction="row" spacing={3} alignItems="center">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 16, color: '#ff6b35' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                +33 1 23 45 67 89
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ fontSize: 16, color: '#ff6b35' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                contact@globalcarconsulting.fr
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ fontSize: 16, color: '#ff6b35' }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                Paris, France
              </Typography>
            </Box>
          </Stack>

          {/* Réseaux sociaux */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              size="small" 
              sx={{ color: 'white', '&:hover': { color: '#ff6b35' } }}
            >
              <Facebook />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ color: 'white', '&:hover': { color: '#ff6b35' } }}
            >
              <Instagram />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ color: 'white', '&:hover': { color: '#ff6b35' } }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
