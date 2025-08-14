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
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { 
  DirectionsCar, 
  School, 
  Assignment, 
  Support,
  ExpandMore,
  CheckCircle,
  Schedule,
  Euro,
  Security
} from '@mui/icons-material';
import Topbar from '../components/topbar/Topbar';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Services = () => {
  const services = [
    {
      icon: <DirectionsCar sx={{ fontSize: 60, color: '#ff6b35' }} />,
      title: 'Permis de Conduire',
      description: 'Obtention et gestion complète de votre permis de conduire',
      features: [
        'Inscription et suivi de dossier',
        'Accompagnement personnalisé',
        'Gestion des démarches administratives',
        'Suivi des examens',
        'Renouvellement et duplicata'
      ],
      price: 'À partir de 150€',
      duration: '2-4 semaines',
      color: '#ff6b35'
    },
    {
      icon: <Assignment sx={{ fontSize: 60, color: '#2196f3' }} />,
      title: 'Carte Grise & Plaques',
      description: 'Démarches pour immatriculation et plaques d\'immatriculation',
      features: [
        'Demande de carte grise',
        'Immatriculation de véhicule',
        'Changement d\'adresse',
        'Duplicata de carte grise',
        'Certificat de cession'
      ],
      price: 'À partir de 80€',
      duration: '1-2 semaines',
      color: '#2196f3'
    },
    {
      icon: <Assignment sx={{ fontSize: 60, color: '#4caf50' }} />,
      title: 'Dédouanement',
      description: 'Procédures douanières simplifiées pour vos véhicules',
      features: [
        'Import de véhicules',
        'Export de véhicules',
        'Déclaration en douane',
        'Calcul des droits et taxes',
        'Accompagnement douanier'
      ],
      price: 'À partir de 200€',
      duration: '3-5 jours',
      color: '#4caf50'
    },
    {
      icon: <School sx={{ fontSize: 60, color: '#9c27b0' }} />,
      title: 'Auto-École',
      description: 'Formation et accompagnement personnalisé au permis',
      features: [
        'Cours théoriques',
        'Leçons de conduite',
        'Préparation aux examens',
        'Formation continue',
        'Permis à points'
      ],
      price: 'À partir de 1200€',
      duration: '3-6 mois',
      color: '#9c27b0'
    }
  ];

  const faq = [
    {
      question: 'Combien de temps faut-il pour obtenir un permis de conduire ?',
      answer: 'Le délai varie selon votre situation. En général, il faut compter 2 à 4 semaines pour un permis classique, et 3 à 6 mois si vous devez passer par l\'auto-école.'
    },
    {
      question: 'Quels documents sont nécessaires pour une carte grise ?',
      answer: 'Vous aurez besoin de votre permis de conduire, d\'une attestation d\'assurance, d\'un certificat de cession, et d\'un justificatif de domicile.'
    },
    {
      question: 'Pouvez-vous m\'accompagner pour le dédouanement ?',
      answer: 'Oui, nous vous accompagnons dans toutes les étapes du dédouanement, de la déclaration à la réception de votre véhicule.'
    },
    {
      question: 'Quels sont les horaires de l\'auto-école ?',
      answer: 'Nos cours théoriques et pratiques sont disponibles du lundi au samedi, de 8h00 à 20h00, selon vos disponibilités.'
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
        py: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Nos Services
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#cccccc',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Découvrez notre gamme complète de services automobiles. 
              Nous simplifions vos démarches administratives et vous accompagnons 
              à chaque étape.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                height: '100%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {service.icon}
                  </Box>
                  
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      color: service.color
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3, 
                      color: '#666',
                      lineHeight: 1.6
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
                    <Chip 
                      icon={<Euro />} 
                      label={service.price}
                      sx={{ backgroundColor: service.color, color: 'white' }}
                    />
                    <Chip 
                      icon={<Schedule />} 
                      label={service.duration}
                      variant="outlined"
                      sx={{ borderColor: service.color, color: service.color }}
                    />
                  </Stack>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: '600' }}>
                      Ce qui est inclus :
                    </Typography>
                    <Stack spacing={1} alignItems="flex-start">
                      {service.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircle sx={{ color: service.color, fontSize: 20 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
                
                <CardActions sx={{ p: 4, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    size="large"
                    sx={{ 
                      backgroundColor: service.color,
                      '&:hover': { backgroundColor: service.color, opacity: 0.9 },
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: '600'
                    }}
                  >
                    Demander un devis
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ 
              textAlign: 'center', 
              fontWeight: 'bold',
              mb: 6,
              color: '#1a1a1a'
            }}
          >
            Questions Fréquentes
          </Typography>
          
          <Grid container spacing={3}>
            {faq.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Accordion sx={{ 
                  borderRadius: 2,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
              Prêt à commencer ?
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
              Contactez-nous dès aujourd'hui pour un accompagnement personnalisé 
              et un devis gratuit pour vos démarches automobiles.
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
                Demander un devis gratuit
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

export default Services;
