import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Stack,
  Avatar,
  Paper,
  Chip
} from '@mui/material';
import { 
  CheckCircle, 
  Security, 
  Speed, 
  Support,
  Star,
  TrendingUp,
  VerifiedUser,
  EmojiEvents
} from '@mui/icons-material';

const AboutSection = () => {
  const values = [
    {
      icon: <Security sx={{ fontSize: 50, color: '#1648a1' }} />,
      title: 'Confiance & Sécurité',
      description: 'Plus de 10 ans d\'expérience dans le secteur automobile avec une réputation irréprochable.',
      color: '#1648a1'
    },
    {
      icon: <Speed sx={{ fontSize: 50, color: '#9f4b62' }} />,
      title: 'Rapidité d\'Exécution',
      description: 'Délais garantis et suivi en temps réel de vos démarches administratives.',
      color: '#9f4b62'
    },
    {
      icon: <Support sx={{ fontSize: 50, color: '#1648a1' }} />,
      title: 'Accompagnement Personnalisé',
      description: 'Un expert dédié à votre dossier pour un suivi optimal et personnalisé.',
      color: '#1648a1'
    },
    {
      icon: <Star sx={{ fontSize: 50, color: '#9f4b62' }} />,
      title: 'Excellence du Service',
      description: '98% de clients satisfaits grâce à notre expertise et notre professionnalisme.',
      color: '#9f4b62'
    }
  ];

  const stats = [
    { number: '500+', label: 'Permis délivrés', icon: <TrendingUp /> },
    { number: '1000+', label: 'Cartes grises traitées', icon: <VerifiedUser /> },
    { number: '98%', label: 'Taux de satisfaction', icon: <Star /> },
    { number: '24h', label: 'Temps de réponse', icon: <Speed /> }
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f8f9fa',
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
        background: 'radial-gradient(circle at 80% 20%, rgba(22, 72, 161, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(159, 75, 98, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Contenu principal */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ mb: 4 }}>
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
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  color: '#1a1a1a',
                  lineHeight: 1.2
                }}
              >
                Pourquoi Choisir <br />
                <span style={{ color: '#1648a1' }}>GLOBAL CAR</span> ?
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#666',
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                Nous sommes votre partenaire de confiance pour tous vos besoins automobiles. 
                Notre expertise et notre professionnalisme font la différence depuis plus de 10 ans.
              </Typography>

              {/* Liste des avantages */}
              <Stack spacing={3} sx={{ mb: 4 }}>
                {[
                  'Plus de 10 ans d\'expérience dans le secteur',
                  'Équipe d\'experts qualifiés et certifiés',
                  'Accompagnement personnalisé et suivi en temps réel',
                  'Garantie de résultat et satisfaction client'
                ].map((advantage, index) => (
                  <Box key={index} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(5px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <CheckCircle sx={{ 
                      color: '#1648a1', 
                      fontSize: 28,
                      flexShrink: 0
                    }} />
                    <Typography variant="body1" sx={{ 
                      color: '#333', 
                      fontWeight: '500',
                      fontSize: '1rem'
                    }}>
                      {advantage}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Image et statistiques */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Carte principale */}
              <Card sx={{ 
                p: 5,
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(22, 72, 161, 0.1)',
                position: 'relative',
                overflow: 'visible'
              }}>
                {/* Badge d'expérience */}
                <Box sx={{
                  position: 'absolute',
                  top: -20,
                  right: 20,
                  zIndex: 3
                }}>
                  <Paper sx={{
                    backgroundColor: '#fbbf24',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    <EmojiEvents sx={{ fontSize: 24 }} />
                    <Typography variant="body2" sx={{ fontWeight: '700' }}>
                      10+ ans d'expérience
                    </Typography>
                  </Paper>
                </Box>

                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar 
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      backgroundColor: '#1648a1',
                      mx: 'auto',
                      mb: 4,
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      boxShadow: '0 8px 25px rgba(22, 72, 161, 0.3)'
                    }}
                  >
                    GC
                  </Avatar>
                  
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2,
                      color: '#1648a1',
                      fontSize: { xs: '1.75rem', md: '2rem' }
                    }}
                  >
                    GLOBAL CAR CONSULTING
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#666',
                      mb: 5,
                      lineHeight: 1.6,
                      fontSize: '1.1rem'
                    }}
                  >
                    Votre partenaire de confiance pour tous vos besoins automobiles. 
                    Nous simplifions vos démarches administratives et vous accompagnons 
                    à chaque étape avec professionnalisme.
                  </Typography>

                  {/* Statistiques */}
                  <Grid container spacing={3}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} key={index}>
                        <Box sx={{ 
                          textAlign: 'center', 
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: 'rgba(22, 72, 161, 0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(22, 72, 161, 0.1)',
                            transform: 'translateY(-3px)'
                          }
                        }}>
                          <Box sx={{ 
                            color: '#9f4b62',
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'center'
                          }}>
                            {stat.icon}
                          </Box>
                          <Typography 
                            variant="h4" 
                            sx={{ 
                              fontWeight: 'bold',
                              color: '#1648a1',
                              mb: 1,
                              fontSize: { xs: '1.5rem', md: '2rem' }
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#666',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Valeurs de l'entreprise */}
        <Box sx={{ mt: { xs: 10, md: 15 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="Nos Valeurs" 
              sx={{ 
                backgroundColor: '#1648a1',
                color: 'white',
                px: 3,
                py: 1,
                fontSize: '1rem',
                fontWeight: '600',
                mb: 3
              }} 
            />
            
            <Typography 
              variant="h3" 
              sx={{ 
                textAlign: 'center',
                fontWeight: 'bold',
                mb: 4,
                color: '#1a1a1a',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Ce qui nous définit
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#666',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Découvrez les principes qui guident nos actions et font de nous 
              votre partenaire de confiance dans le secteur automobile.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardContent>
                    <Box sx={{ 
                      mb: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 80
                    }}>
                      {value.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 3,
                        color: value.color,
                        fontSize: { xs: '1.25rem', md: '1.5rem' }
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#666',
                        lineHeight: 1.6,
                        fontSize: '1rem'
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

        {/* Section CTA */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: { xs: 12, md: 18 },
          p: { xs: 5, md: 8 },
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
          border: '1px solid rgba(22, 72, 161, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Motif de fond pour la section CTA */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(22, 72, 161, 0.02) 0%, rgba(159, 75, 98, 0.02) 100%)',
            pointerEvents: 'none'
          }} />

          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                mb: 4,
                color: '#1648a1',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Prêt à nous faire confiance ?
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#666',
                mb: 6,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: '1.1rem'
              }}
            >
              Rejoignez nos milliers de clients satisfaits et simplifiez 
              vos démarches automobiles dès aujourd'hui. Notre équipe d'experts 
              est prête à vous accompagner.
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 3
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                p: 3,
                backgroundColor: 'rgba(22, 72, 161, 0.05)',
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid rgba(22, 72, 161, 0.1)'
              }}>
                <TrendingUp sx={{ color: '#1648a1', fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
                  Plus de 1000 clients satisfaits
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                p: 3,
                backgroundColor: 'rgba(159, 75, 98, 0.05)',
                borderRadius: 3,
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid rgba(159, 75, 98, 0.1)'
              }}>
                <Star sx={{ color: '#9f4b62', fontSize: 28 }} />
                <Typography variant="body1" sx={{ color: '#333', fontWeight: '600' }}>
                  4.9/5 étoiles sur Google
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection; 