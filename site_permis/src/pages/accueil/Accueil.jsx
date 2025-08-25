import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button,
  Stack,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  DirectionsCar, 
  School, 
  Assignment, 
  Support,
  CheckCircle,
  Star,
  People,
  Security,
  Speed,
  Verified 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Accueil = () => {
  const navigate = useNavigate();
  const stats = [
    { number: '5000+', label: 'Clients satisfaits', icon: <People /> },
    { number: '15+', label: 'Années d\'expérience', icon: <Star /> },
    { number: '98%', label: 'Taux de réussite', icon: <CheckCircle /> },
    { number: '24/7', label: 'Support client', icon: <Support /> }
  ];

  const values = [
    {
      icon: <Security sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la transparence et la fiabilité.'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Efficacité',
      description: 'Nous optimisons chaque processus pour vous faire gagner du temps et de l\'argent.'
    },
    {
             icon: <Verified sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Expertise',
      description: 'Notre équipe d\'experts vous accompagne avec professionnalisme et compétence.'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Cliente satisfaite',
      content: 'GLOBAL CAR CONSULTING m\'a accompagnée pour l\'obtention de mon permis de conduire. Service impeccable et personnel très professionnel !',
      rating: 5
    },
    {
      name: 'Jean Martin',
      role: 'Client régulier',
      content: 'Pour mes démarches de carte grise, je fais toujours confiance à cette équipe. Rapide, efficace et transparent sur les tarifs.',
      rating: 5
    },
    {
      name: 'Sophie Bernard',
      role: 'Cliente auto-école',
      content: 'Formation de qualité et moniteurs très pédagogues. J\'ai obtenu mon permis du premier coup !',
      rating: 5
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Topbar />
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background pattern */}

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
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
                Votre Partenaire
                <Box component="span" sx={{ color: '#ff6b35' }}> Automobile</Box>
                <br />
                de Confiance
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: '#cccccc',
                  lineHeight: 1.6
                }}
              >
                Depuis plus de 15 ans, GLOBAL CAR CONSULTING accompagne 
                des milliers de clients dans leurs démarches automobiles. 
                Notre expertise et notre professionnalisme font de nous 
                votre partenaire de choix.
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
              >
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/services')}
                  sx={{ 
                    backgroundColor: '#ff6b35',
                    '&:hover': { backgroundColor: '#e55a2b' },
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    fontWeight: '600'
                  }}
                >
                  Découvrir nos services
                </Button>
                
                <Button 
                  variant="outlined" 
                  size="large"
                  onClick={() => navigate('/contact')}
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
                    fontWeight: '600'
                  }}
                >
                  Nous contacter
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
                <Box sx={{ 
                  width: { xs: 300, md: 400 }, 
                  height: { xs: 300, md: 400 },
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 107, 53, 0.3)'
                }}>
                  <DirectionsCar sx={{ fontSize: 120, color: '#ff6b35' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      



      {/* Testimonials Section */}
    

      {/* CTA Section */}
      

      <Footer />
    </Box>
  );
};

export default Accueil;
