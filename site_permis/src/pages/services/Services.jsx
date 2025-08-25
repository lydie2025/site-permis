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
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './services.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <DirectionsCar />,
      title: 'Permis de Conduire',
      description: 'Obtention et gestion complète de votre permis de conduire',
      features: [
        'Inscription et suivi de dossier',
        'Accompagnement personnalisé',
        'Gestion des démarches administratives',
        'Suivi des examens',
        'Renouvellement et duplicata'
      ],
      price: 'À partir de 98 000 FCFA',
      duration: '2-4 semaines'
    },
    {
      icon: <Assignment />,
      title: 'Carte Grise & Plaques',
      description: 'Démarches pour immatriculation et plaques d\'immatriculation',
      features: [
        'Demande de carte grise',
        'Immatriculation de véhicule',
        'Changement d\'adresse',
        'Duplicata de carte grise',
        'Certificat de cession'
      ],
      price: 'À partir de 52 000 FCFA',
      duration: '1-2 semaines'
    },
    {
      icon: <Assignment />,
      title: 'Dédouanement',
      description: 'Procédures douanières simplifiées pour vos véhicules',
      features: [
        'Import de véhicules',
        'Export de véhicules',
        'Déclaration en douane',
        'Calcul des droits et taxes',
        'Accompagnement douanier'
      ],
      price: 'À partir de 131 000 FCFA',
      duration: '3-5 jours'
    },
    {
      icon: <School />,
      title: 'Auto-École',
      description: 'Formation et accompagnement personnalisé au permis',
      features: [
        'Cours théoriques',
        'Leçons de conduite',
        'Préparation aux examens',
        'Formation continue',
        'Permis à points'
      ],
      price: 'À partir de 787 000 FCFA',
      duration: '3-6 mois'
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
    <Box className="services-page">
      <Topbar />
      <Header />
      <Navbar />
      
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              className="hero-title"
            >
              Nos Services
            </Typography>
            <Typography 
              variant="h5" 
              className="hero-subtitle"
            >
              Découvrez notre gamme complète de services automobiles. 
              Nous simplifions vos démarches administratives et vous accompagnons 
              à chaque étape.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" className="services-list">
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={5} key={index}>
              <Card className="service-card">
                <CardContent className="service-content">
                  <Box className="service-icon">
                    {service.icon}
                  </Box>
                  
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      color: '#1946a3'
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    className="service-description"
                  >
                    {service.description}
                  </Typography>

                  <Stack direction="row" spacing={2} className="service-tags">
                    <Chip 
                      icon={<Euro />} 
                      label={service.price}
                      sx={{ backgroundColor: '#1946a3', color: 'white' }}
                    />
                    <Chip 
                      icon={<Schedule />} 
                      label={service.duration}
                      variant="outlined"
                      sx={{ borderColor: '#a26175', color: '#a26175' }}
                    />
                  </Stack>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" className="features-title">
                      Ce qui est inclus :
                    </Typography>
                    <Stack spacing={1} alignItems="flex-start">
                      {service.features.map((feature, idx) => (
                        <Box key={idx} className="feature-item">
                          <CheckCircle sx={{ color: '#a26175', fontSize: 20 }} />
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
                    onClick={() => navigate('/contact')}
                    sx={{ 
                      background: 'linear-gradient(135deg, #1946a3, #a26175)',
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #1946a3, #a26175)',
                        opacity: 0.9 
                      },
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
      <Box className="faq-section">
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            className="faq-title"
          >
            Questions Fréquentes
          </Typography>
          
          <Grid container spacing={3} justifyContent="center">
            {faq.map((item, index) => (
              <Grid item xs={12} md={8} lg={6} key={index}>
                <Accordion>
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
      <Box className="cta-section">
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
              className="cta-subtitle"
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
                className="cta-btn-orange"
                onClick={() => navigate('/contact')}
              >
                Demander un devis gratuit
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                className="cta-btn-white"
                onClick={() => navigate('/contact')}
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
