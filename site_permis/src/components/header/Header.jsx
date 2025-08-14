import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { DirectionsCar, School, Assignment, Support } from '@mui/icons-material';
import './header.css';

const Header = () => {
  return (
    <Box className="header" sx={{ 
      backgroundColor: 'white', 
      py: 3,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          {/* Logo et nom de l'entreprise */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              width: 60, 
              height: 60, 
              backgroundColor: '#ff6b35',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold'
            }}>
              GC
            </Box>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 'bold', 
                color: '#1a1a1a',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}>
                GLOBAL CAR
              </Typography>
              <Typography variant="h6" sx={{ 
                color: '#ff6b35', 
                fontWeight: '600',
                fontSize: { xs: '1rem', md: '1.25rem' }
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
              <DirectionsCar sx={{ fontSize: 32, color: '#ff6b35', mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: '600' }}>
                Permis & Carte Grise
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <School sx={{ fontSize: 32, color: '#ff6b35', mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: '600' }}>
                Auto-École
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Assignment sx={{ fontSize: 32, color: '#ff6b35', mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: '600' }}>
                Dédouanement
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Support sx={{ fontSize: 32, color: '#ff6b35', mb: 1 }} />
              <Typography variant="body2" sx={{ fontWeight: '600' }}>
                Accompagnement
              </Typography>
            </Box>
          </Stack>

          {/* Bouton d'action */}
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#ff6b35',
              '&:hover': { backgroundColor: '#e55a2b' },
              px: 3,
              py: 1.5,
              borderRadius: 2,
              fontWeight: '600',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Devis Gratuit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
