import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  Schedule,
  ArrowForward,
  Message
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: '#1648a1' }} />,
      title: 'Téléphone',
      info: '694153503 / 694265006',
      description: 'Appelez-nous pour un accompagnement personnalisé'
    },
    {
      icon: <Email sx={{ fontSize: 40, color: '#9f4b62' }} />,
      title: 'Email',
      info: 'YENDEFREID@ICLOUD.COM',
      description: 'Envoyez-nous votre demande par email'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: '#1648a1' }} />,
      title: 'Adresse',
      info: 'Yaoundé, Cameroun',
              description: 'Bureau principal au cœur de Yaoundé'
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: '#9f4b62' }} />,
      title: 'Horaires',
      info: 'Lun-Ven: 9h-18h',
      description: 'Disponible du lundi au vendredi'
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: 'white',
      py: { xs: 6, md: 8 },
      position: 'relative'
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* En-tête */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip 
            label="CONTACT" 
            sx={{ 
              backgroundColor: '#9f4b62',
              color: 'white',
              px: 3,
              py: 1,
              fontSize: '1rem',
              fontWeight: '600',
              mb: 3
            }} 
          />
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#1e293b',
              lineHeight: 1.2
            }}
          >
            Contactez-nous <br />
            <span style={{ color: '#1648a1' }}>Dès Aujourd'hui</span>
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#64748b',
              mb: 4, 
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1rem'
            }}
          >
            Notre équipe d'experts est prête à vous accompagner dans toutes vos démarches automobiles. 
            N'hésitez pas à nous contacter pour un accompagnement personnalisé.
          </Typography>
        </Box>

        {/* Informations de contact */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {contactInfo.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%',
                textAlign: 'center',
                p: 3,
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {item.icon}
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#1e293b',
                      fontSize: '1.1rem'
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: '600',
                      mb: 1,
                      color: '#1648a1',
                      fontSize: '0.95rem'
                    }}
                  >
                    {item.info}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#64748b',
                      lineHeight: 1.5,
                      fontSize: '0.85rem'
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Boutons d'action */}
        <Box sx={{ textAlign: 'center' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                startIcon={<Message />}
                sx={{
                  backgroundColor: '#1648a1',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0d3a7a',
                    transform: 'translateY(-2px)'
                  },
                  borderRadius: 3,
                  px: 4,
                  py: 2,
                  fontWeight: '600',
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Nous contacter
                <ArrowForward sx={{ ml: 2, fontSize: 20 }} />
              </Button>
            </Grid>
            
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: '#9f4b62',
                  color: '#9f4b62',
                  '&:hover': {
                    borderColor: '#9f4b62',
                    backgroundColor: '#9f4b6210'
                  },
                  borderRadius: 3,
                  px: 4,
                  py: 2,
                  fontWeight: '600',
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                Demander un devis
                <ArrowForward sx={{ ml: 2, fontSize: 20 }} />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection; 