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
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Accueil = () => {
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
      icon: <Trust sx={{ fontSize: 40, color: '#ff6b35' }} />,
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
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
          zIndex: 1
        }} />

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
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ 
                    color: '#ff6b35', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#1a1a1a',
                      mb: 1
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      fontWeight: '500'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1a1a1a'
                }}
              >
                À Propos de Nous
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: '#666',
                  lineHeight: 1.6
                }}
              >
                GLOBAL CAR CONSULTING est née de la volonté de simplifier 
                les démarches administratives automobiles. Notre équipe 
                d'experts vous accompagne dans tous vos projets.
              </Typography>

              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Plus de 15 ans d'expérience dans le secteur automobile"
                    primaryTypographyProps={{ variant: 'body1', color: '#333' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Équipe d'experts qualifiés et certifiés"
                    primaryTypographyProps={{ variant: 'body1', color: '#333' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Service client disponible 24h/24 et 7j/7"
                    primaryTypographyProps={{ variant: 'body1', color: '#333' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Tarifs transparents et sans surprise"
                    primaryTypographyProps={{ variant: 'body1', color: '#333' }}
                  />
                </ListItem>
              </List>

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
                  mt: 3
                }}
              >
                En savoir plus
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}>
                <Box sx={{ 
                  width: '100%',
                  maxWidth: 500,
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 4,
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 3,
                      color: '#1a1a1a',
                      textAlign: 'center'
                    }}
                  >
                    Notre Mission
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, 
                      color: '#666',
                      lineHeight: 1.6,
                      textAlign: 'center'
                    }}
                  >
                    Simplifier et accélérer vos démarches automobiles en vous 
                    offrant un service personnalisé, professionnel et efficace. 
                    Nous nous engageons à être votre partenaire de confiance 
                    pour tous vos besoins automobiles.
                  </Typography>

                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Chip 
                      label="Professionnalisme" 
                      sx={{ backgroundColor: '#ff6b35', color: 'white' }}
                    />
                    <Chip 
                      label="Efficacité" 
                      sx={{ backgroundColor: '#ff6b35', color: 'white' }}
                    />
                    <Chip 
                      label="Confiance" 
                      sx={{ backgroundColor: '#ff6b35', color: 'white' }}
                    />
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 6,
            color: '#1a1a1a'
          }}
        >
          Nos Valeurs
        </Typography>
        
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {value.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#1a1a1a'
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      lineHeight: 1.6
                    }}
                  >
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 6,
              color: '#1a1a1a'
            }}
          >
            Témoignages Clients
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={0.5}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} sx={{ color: '#ffd700', fontSize: 20 }} />
                        ))}
                      </Stack>
                    </Box>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        color: '#666',
                        lineHeight: 1.6,
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ backgroundColor: '#ff6b35' }}>
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3
              }}
            >
              Prêt à nous faire confiance ?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#cccccc',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Rejoignez nos milliers de clients satisfaits et découvrez 
              pourquoi GLOBAL CAR CONSULTING est le leader du secteur.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              justifyContent="center"
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
                  fontWeight: '600'
                }}
              >
                Commencer maintenant
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
                  fontWeight: '600'
                }}
              >
                Nous contacter
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Accueil;
