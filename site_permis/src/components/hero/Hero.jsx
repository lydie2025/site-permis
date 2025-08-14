import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack, 
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { 
  DirectionsCar, 
  School, 
  Assignment, 
  Support,
  ArrowForward 
} from '@mui/icons-material';
import './hero.css';

const Hero = () => {
  const services = [
    {
      icon: <DirectionsCar sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Permis de Conduire',
      description: 'Obtention et gestion complète de votre permis'
    },
    {
      icon: <Assignment sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Carte Grise',
      description: 'Démarches pour immatriculation et plaques'
    },
    {
      icon: <Assignment sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Dédouanement',
      description: 'Procédures douanières simplifiées'
    },
    {
      icon: <School sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Auto-École',
      description: 'Formation et accompagnement personnalisé'
    }
  ];

  return (
    <Box className="hero" sx={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: 'white',
      py: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Contenu principal */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 'bold',
                mb: 3,
                lineHeight: 1.2
              }}
            >
              Vos Services
              <Box component="span" sx={{ color: '#ff6b35' }}> Automobiles</Box>
              <br />
              Simplifiés
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: '#cccccc',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
            >
              GLOBAL CAR CONSULTING vous accompagne dans toutes vos démarches 
              automobiles : permis de conduire, carte grise, dédouanement et formation.
            </Typography>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              sx={{ mb: 6 }}
            >
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  backgroundColor: '#ff6b35',
                  '&:hover': { backgroundColor: '#e55a2b' },
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
                endIcon={<ArrowForward />}
              >
                Commencer Maintenant
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { 
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)'
                  },
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
              >
                En savoir plus
              </Button>
            </Stack>
          </Grid>

          {/* Services cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      backgroundColor: 'rgba(255, 107, 53, 0.2)',
                      borderColor: '#ff6b35'
                    }
                  }}>
                    <CardContent sx={{ 
                      textAlign: 'center', 
                      p: 3,
                      '&:last-child': { pb: 3 }
                    }}>
                      <Box sx={{ mb: 2 }}>
                        {service.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: '600', 
                          mb: 1,
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#cccccc',
                          fontSize: { xs: '0.8rem', md: '0.875rem' }
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
