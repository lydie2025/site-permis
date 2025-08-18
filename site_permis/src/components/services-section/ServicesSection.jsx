import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Button,
  Chip,
  Stack,
  Paper
} from '@mui/material';
import { 
  DirectionsCar, 
  School, 
  Assignment, 
  Support,
  CheckCircle,
  Schedule,
  Euro,
  Description,
  ViewModule,
  Star
} from '@mui/icons-material';

const ServicesSection = () => {
  const services = [
    {
      icon: <Description sx={{ fontSize: 60, color: '#1648a1' }} />,
      title: 'Documentation Permis',
      description: 'Gestion complète de votre dossier permis de conduire avec accompagnement personnalisé',
      features: [
        'Inscription et suivi de dossier',
        'Gestion des démarches administratives',
        'Suivi des examens',
        'Renouvellement et duplicata'
      ],
      price: 'À partir de 150€',
      duration: '2-4 semaines',
      color: '#1648a1',
      highlight: true,
      badge: 'Populaire'
    },
    {
      icon: <Description sx={{ fontSize: 60, color: '#9f4b62' }} />,
      title: 'Documentation Carte Grise',
      description: 'Démarches complètes pour immatriculation et gestion de votre carte grise',
      features: [
        'Demande de carte grise',
        'Immatriculation de véhicule',
        'Changement d\'adresse',
        'Duplicata de carte grise'
      ],
      price: 'À partir de 80€',
      duration: '1-2 semaines',
      color: '#9f4b62',
      highlight: false
    },
    {
      icon: <ViewModule sx={{ fontSize: 60, color: '#1648a1' }} />,
      title: 'Dédouanement',
      description: 'Accompagnement complet pour l\'import/export de vos véhicules',
      features: [
        'Procédures douanières',
        'Déclaration en douane',
        'Calcul des droits',
        'Suivi des formalités'
      ],
      price: 'À partir de 200€',
      duration: '3-5 jours',
      color: '#1648a1',
      highlight: false
    },
    {
      icon: <Support sx={{ fontSize: 60, color: '#9f4b62' }} />,
      title: 'Enroulement & Suivi',
      description: 'Accompagnement continu pour permis et carte grise avec suivi personnalisé',
      features: [
        'Suivi de dossier en temps réel',
        'Notifications automatiques',
        'Assistance téléphonique',
        'Garantie de résultat'
      ],
      price: 'Inclus dans nos forfaits',
      duration: 'Accompagnement continu',
      color: '#9f4b62',
      highlight: false
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: 'white',
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
        background: 'radial-gradient(circle at 20% 80%, rgba(22, 72, 161, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(159, 75, 98, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* En-tête de la section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="NOS SERVICES" 
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
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              color: '#1e293b',
              lineHeight: 1.2
            }}
          >
            Solutions Automobiles <br />
            <span style={{ color: '#1648a1' }}>Complètes</span>
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#64748b',
              mb: 4, 
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Découvrez notre gamme de services professionnels conçus pour simplifier 
            vos démarches automobiles et vous faire gagner du temps
          </Typography>
        </Box>

        {/* Grille des services */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 20px 40px ${service.color}20`,
                    '& .service-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${service.color}, ${service.color === '#1648a1' ? '#9f4b62' : '#1648a1'})`,
                    zIndex: 1
                  }
                }}
              >
                {service.highlight && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 2
                    }}
                  >
                    <Chip
                      label={service.badge}
                      sx={{
                        backgroundColor: '#1648a1',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  {/* Icône du service */}
                  <Box
                    className="service-icon"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Titre du service */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: '700',
                      mb: 2,
                      color: '#1e293b',
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Liste des fonctionnalités */}
                  <Box sx={{ textAlign: 'left', mb: 3 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1.5,
                          gap: 1
                        }}
                      >
                        <CheckCircle
                          sx={{
                            fontSize: 18,
                            color: '#10b981',
                            flexShrink: 0
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#475569',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Informations supplémentaires */}
                  <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      p: 1,
                      backgroundColor: 'rgba(22, 72, 161, 0.1)',
                      borderRadius: 1
                    }}>
                      <Schedule sx={{ fontSize: 16, color: '#1648a1' }} />
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: '500' }}>
                        {service.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      p: 1,
                      backgroundColor: 'rgba(159, 75, 98, 0.1)',
                      borderRadius: 1
                    }}>
                      <Euro sx={{ fontSize: 16, color: '#9f4b62' }} />
                      <Typography variant="caption" sx={{ color: '#64748b', fontWeight: '500' }}>
                        {service.price}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>

                <CardActions sx={{ p: 4, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      backgroundColor: service.color,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: service.color === '#1648a1' ? '#9f4b62' : '#1648a1',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${service.color}40`
                      },
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: '600',
                      textTransform: 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Commencer maintenant
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Section des avantages */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem' },
              fontWeight: '700',
              mb: 6,
              color: '#1e293b'
            }}
          >
            Pourquoi nous choisir ?
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                icon: <Star sx={{ fontSize: 40, color: '#1648a1' }} />,
                title: "Excellence",
                description: "Service premium avec une attention aux détails"
              },
              {
                icon: <Schedule sx={{ fontSize: 40, color: '#9f4b62' }} />,
                title: "Rapidité",
                description: "Traitement express de vos dossiers"
              },
              {
                icon: <Support sx={{ fontSize: 40, color: '#1648a1' }} />,
                title: "Support 24/7",
                description: "Accompagnement à chaque étape"
              },
              {
                icon: <CheckCircle sx={{ fontSize: 40, color: '#9f4b62' }} />,
                title: "Garantie",
                description: "Résultats garantis ou remboursé"
              }
            ].map((advantage, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {advantage.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: '700',
                      mb: 1,
                      color: '#1e293b'
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.5
                    }}
                  >
                    {advantage.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection; 