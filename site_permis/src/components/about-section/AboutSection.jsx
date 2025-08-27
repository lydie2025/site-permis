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
  CheckCircle, 
  Security, 
  Speed, 
  Support,
  Star,
  TrendingUp,
  ArrowForward
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const values = [
    {
      icon: <Security sx={{ fontSize: { xs: 40, md: 50 }, color: '#1648a1' }} />,
      title: 'Confiance & Sécurité',
      description: 'Plus de 10 ans d\'expérience dans le secteur automobile avec une réputation irréprochable.',
      color: '#1648a1'
    },
    {
      icon: <Speed sx={{ fontSize: { xs: 40, md: 50 }, color: '#9f4b62' }} />,
      title: 'Rapidité d\'Exécution',
      description: 'Délais garantis et suivi en temps réel de vos démarches administratives.',
      color: '#9f4b62'
    },
    {
      icon: <Support sx={{ fontSize: { xs: 40, md: 50 }, color: '#1648a1' }} />,
      title: 'Accompagnement Personnalisé',
      description: 'Un expert dédié à votre dossier pour un suivi optimal et personnalisé.',
      color: '#1648a1'
    },
    {
      icon: <Star sx={{ fontSize: { xs: 40, md: 50 }, color: '#9f4b62' }} />,
      title: 'Excellence du Service',
      description: '98% de clients satisfaits grâce à notre expertise et notre professionnalisme.',
      color: '#9f4b62'
    }
  ];

  const stats = [
    { number: '500+', label: 'Permis délivrés' },
    { number: '1000+', label: 'Cartes grises traitées' },
    { number: '98%', label: 'Taux de satisfaction' },
    { number: '24h', label: 'Temps de réponse' }
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa',
      py: { xs: 6, md: 10 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Motif de fond subtil */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(22, 72, 161, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(159, 75, 98, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* En-tête PARFAITEMENT CENTRÉ */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Chip 
            label="À Propos de Nous" 
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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              color: '#1a1a1a',
              lineHeight: 1.2,
              textAlign: 'center'
            }}
          >
            Pourquoi Choisir <br />
            <span style={{ color: '#1648a1' }}>GLOBAL CAR</span> ?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              textAlign: 'center'
            }}
          >
            Nous sommes votre partenaire de confiance pour tous vos besoins automobiles. 
            Notre expertise et notre professionnalisme font la différence depuis plus de 10 ans.
          </Typography>
        </Box>

        {/* Statistiques PARFAITEMENT CENTRÉES */}
        <Box sx={{ 
          mb: { xs: 6, md: 8 },
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              maxWidth: '800px',
              justifyContent: 'center'
            }}
          >
            {stats.map((stat, index) => (
              <Grid 
                item 
                xs={6} 
                sm={3} 
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box sx={{ 
                  width: '100%',
                  maxWidth: '180px',
                  textAlign: 'center',
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                  }
                }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: '700',
                      mb: 1,
                      color: '#1648a1',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                      fontWeight: '500'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Valeurs de l'entreprise PARFAITEMENT CENTRÉES */}
        <Box sx={{ 
          mb: { xs: 6, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 5,
              color: '#1a1a1a',
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}
          >
            Ce qui nous définit
          </Typography>
          
          <Grid 
            container 
            spacing={4} 
            sx={{ 
              justifyContent: 'center',
              maxWidth: '1000px'
            }}
          >
            {values.map((value, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card sx={{ 
                  width: '100%',
                  maxWidth: '250px',
                  height: '100%',
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardContent>
                    <Box sx={{ 
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 60
                    }}>
                      {value.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 2,
                        color: value.color,
                        fontSize: { xs: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666',
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section CTA PARFAITEMENT CENTRÉE */}
        <Box sx={{ 
          textAlign: 'center', 
          p: { xs: 4, md: 6 },
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(22, 72, 161, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              color: '#1648a1',
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              textAlign: 'center'
            }}
          >
            Prêt à nous faire confiance ?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#666',
              mb: 4,
              maxWidth: '600px',
              lineHeight: 1.6,
              fontSize: '1rem',
              textAlign: 'center'
            }}
          >
            Rejoignez nos milliers de clients satisfaits et simplifiez 
            vos démarches automobiles dès aujourd'hui.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3
          }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/about')}
              sx={{
                backgroundColor: '#1648a1',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0d3a7a',
                  transform: 'translateY(-2px)'
                },
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              En savoir plus sur nous
              <ArrowForward sx={{ ml: 1.5, fontSize: 18 }} />
            </Button>
            
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
                py: 1.5,
                fontWeight: '600',
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Contacter Nous
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection; 