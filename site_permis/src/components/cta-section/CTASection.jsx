import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  Stack,
  Grid
} from '@mui/material';
import { 
  Phone, 
  Email, 
  WhatsApp,
  ArrowRight
} from '@mui/icons-material';

const CTASection = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #1648a1 0%, #1e5bb8 50%, #9f4b62 100%)',
      color: 'white',
      py: { xs: 8, md: 12 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Motif de fond */}
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)',
        backgroundSize: '400px 400px'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Contenu principal */}
          <Grid item xs={12} lg={7}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Besoin d'aide pour vos <br />
              <span style={{ color: '#fbbf24' }}>démarches automobiles</span> ?
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                lineHeight: 1.6,
                maxWidth: '600px'
              }}
            >
              Nos experts sont disponibles 24h/24 et 7j/7 pour vous accompagner 
              dans toutes vos démarches. Contactez-nous dès maintenant pour un 
              accompagnement personnalisé.
            </Typography>

            {/* Statistiques rapides */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fbbf24' }}>
                    24h
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Réponse garantie
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fbbf24' }}>
                    98%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Satisfaction client
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fbbf24' }}>
                    10+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Années d'expérience
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fbbf24' }}>
                    1000+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Clients satisfaits
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Formulaire de contact rapide */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Contactez-nous
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
              </Typography>

              {/* Boutons de contact */}
              <Stack spacing={3}>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  startIcon={<Phone />}
                  sx={{ 
                    backgroundColor: '#9f4b62',
                    '&:hover': { backgroundColor: '#8a3f54' },
                    py: 2,
                    borderRadius: 2,
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  Appeler maintenant
                </Button>
                
                <Button 
                  variant="outlined" 
                  fullWidth
                  size="large"
                  startIcon={<Email />}
                  sx={{ 
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { 
                      borderColor: '#fbbf24',
                      backgroundColor: 'rgba(251, 191, 36, 0.1)'
                    },
                    py: 2,
                    borderRadius: 2,
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  Envoyer un email
                </Button>
                
                <Button 
                  variant="outlined" 
                  fullWidth
                  size="large"
                  startIcon={<WhatsApp />}
                  sx={{ 
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { 
                      borderColor: '#25d366',
                      backgroundColor: 'rgba(37, 211, 102, 0.1)'
                    },
                    py: 2,
                    borderRadius: 2,
                    fontWeight: '600',
                    fontSize: '1.1rem'
                  }}
                >
                  WhatsApp
                </Button>
              </Stack>

              {/* Informations de contact */}
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                textAlign: 'center'
              }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                  Ou visitez notre page contact pour plus d'informations
                </Typography>
                <Button 
                  variant="text" 
                  endIcon={<ArrowRight />}
                  sx={{ 
                    color: '#fbbf24',
                    '&:hover': { backgroundColor: 'rgba(251, 191, 36, 0.1)' }
                  }}
                >
                  Voir la page contact
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Section des garanties */}
        <Box sx={{ 
          mt: { xs: 8, md: 12 },
          textAlign: 'center'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold',
              mb: 6,
              color: '#fbbf24'
            }}
          >
            Nos Garanties
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✓ Satisfaction Garantie
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Nous nous engageons à votre satisfaction ou remboursement
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✓ Délais Respectés
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Vos démarches sont traitées dans les délais annoncés
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✓ Accompagnement 24/7
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Support disponible à tout moment pour vous aider
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                height: '100%'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ✓ Prix Transparents
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Aucun frais caché, tout est clair dès le début
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection; 