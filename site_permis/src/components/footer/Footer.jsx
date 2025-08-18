import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  Stack,
  Divider,
  Chip,
  Button
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  Facebook, 
  Instagram, 
  LinkedIn,
  DirectionsCar,
  School,
  Assignment,
  Support,
  WhatsApp,
  ArrowUpward
} from '@mui/icons-material';
import logo from '../../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Permis de Conduire', icon: <DirectionsCar />, color: '#1648a1' },
    { name: 'Carte Grise', icon: <Assignment />, color: '#9f4b62' },
    { name: 'Dédouanement', icon: <Assignment />, color: '#1648a1' },
    { name: 'Auto-École', icon: <School />, color: '#9f4b62' },
    { name: 'Accompagnement', icon: <Support />, color: '#1648a1' }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/accueil' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'À propos', href: '/accueil' },
    { name: 'FAQ', href: '/services' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className="footer" sx={{ 
      backgroundColor: '#0f172a', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background décoratif */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'linear-gradient(135deg, rgba(22, 72, 161, 0.05) 0%, rgba(159, 75, 98, 0.05) 100%)',
        zIndex: 1
      }} />

      {/* Bouton retour en haut */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: '#1648a1',
          color: 'white',
          zIndex: 1000,
          width: 48,
          height: 48,
          boxShadow: '0 4px 20px rgba(22, 72, 161, 0.3)',
          '&:hover': {
            backgroundColor: '#9f4b62',
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(159, 75, 98, 0.4)'
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <ArrowUpward />
      </IconButton>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Section principale */}
        <Grid container spacing={4} sx={{ py: 6, justifyContent: 'center' }}>
          {/* Informations de l'entreprise */}
          <Grid item xs={12} lg={4}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 3, 
                mb: 2,
                justifyContent: 'center'
              }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  background: 'linear-gradient(135deg, #1648a1 0%, #9f4b62 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  boxShadow: '0 6px 20px rgba(22, 72, 161, 0.3)',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={logo} 
                    alt="Global Car Consulting Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }} 
                  />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: '800',
                    background: 'linear-gradient(45deg, #ffffff 30%, #1648a1 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 0.5
                  }}>
                    GLOBAL CAR
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    color: '#9f4b62',
                    fontWeight: '600',
                    letterSpacing: '1px'
                  }}>
                    CONSULTING
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: '#cbd5e1', 
              lineHeight: 1.6,
              fontSize: '0.9rem',
              textAlign: 'center'
            }}>
              Votre partenaire de confiance pour tous vos besoins automobiles. 
              Nous simplifions vos démarches administratives et vous accompagnons 
              dans l'obtention de votre permis de conduire avec expertise et professionnalisme.
            </Typography>

            {/* Newsletter */}
            <Box sx={{ 
              p: 2, 
              backgroundColor: 'rgba(22, 72, 161, 0.1)', 
              borderRadius: 2,
              border: '1px solid rgba(22, 72, 161, 0.2)',
              mb: 3
            }}>
              <Typography variant="h6" sx={{ 
                color: '#1648a1', 
                fontWeight: '600', 
                mb: 1,
                fontSize: '1rem'
              }}>
                Restez informé
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#cbd5e1', 
                mb: 2,
                fontSize: '0.8rem'
              }}>
                Recevez nos dernières actualités et offres spéciales
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#1648a1',
                  color: 'white',
                  '&:hover': { 
                    backgroundColor: '#9f4b62',
                    transform: 'translateY(-2px)'
                  },
                  borderRadius: 2,
                  px: 2,
                  py: 0.5,
                  fontWeight: '600',
                  textTransform: 'none',
                  fontSize: '0.8rem'
                }}
              >
                S'abonner
              </Button>
            </Box>

            {/* Réseaux sociaux */}
            <Stack direction="row" spacing={1.5} justifyContent="center">
              {[
                { icon: <Facebook />, color: '#1877f2', hoverColor: '#0d6efd' },
                { icon: <Instagram />, color: '#e4405f', hoverColor: '#d63384' },
                { icon: <LinkedIn />, color: '#0077b5', hoverColor: '#005885' },
                { icon: <WhatsApp />, color: '#25d366', hoverColor: '#1ea952' }
              ].map((social, index) => (
                <IconButton 
                  key={index}
                  className="social-icon"
                  sx={{ 
                    color: 'white', 
                    backgroundColor: social.color,
                    width: 40,
                    height: 40,
                    '&:hover': { 
                      backgroundColor: social.hoverColor,
                      transform: 'translateY(-3px) rotate(5deg)',
                      boxShadow: `0 8px 25px ${social.color}60`
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={6} lg={2}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: '700',
              color: '#1648a1',
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 30,
                height: 2,
                backgroundColor: '#1648a1',
                borderRadius: 1
              }
            }}>
              Nos Services
            </Typography>
            <Stack spacing={1.5} alignItems="center">
              {services.map((service, index) => (
                <Box 
                  key={index} 
                  className="service-item"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(22, 72, 161, 0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box sx={{ 
                    color: service.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: `${service.color}20`
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="body2" sx={{ 
                    color: '#cbd5e1',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    '&:hover': { color: service.color }
                  }}>
                    {service.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Liens rapides */}
          <Grid item xs={12} md={6} lg={2}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: '700',
              color: '#9f4b62',
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 30,
                height: 2,
                backgroundColor: '#9f4b62',
                borderRadius: 1
              }
            }}>
              Liens Rapides
            </Typography>
            <Stack spacing={1.5} alignItems="center">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="quick-link"
                  sx={{ 
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontWeight: '500',
                    p: 1.5,
                    borderRadius: 2,
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#9f4b62',
                      backgroundColor: 'rgba(159, 75, 98, 0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} lg={4}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: '700',
              color: '#1648a1',
              position: 'relative',
              textAlign: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -6,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 30,
                height: 2,
                backgroundColor: '#1648a1',
                borderRadius: 1
              }
            }}>
              Contact
            </Typography>
            <Stack spacing={2} alignItems="center">
              {[
                { icon: <Phone />, text: '+33 1 23 45 67 89', color: '#10b981' },
                { icon: <Email />, text: 'contact@globalcarconsulting.fr', color: '#3b82f6' },
                { icon: <LocationOn />, text: '123 Avenue des Champs-Élysées, 75008 Paris, France', color: '#ef4444' }
              ].map((contact, index) => (
                <Box 
                  key={index}
                  className="contact-item"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 1.5,
                    p: 1.5,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    maxWidth: '280px',
                    '&:hover': {
                      backgroundColor: 'rgba(22, 72, 161, 0.1)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box sx={{ 
                    color: contact.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: `${contact.color}20`,
                    flexShrink: 0
                  }}>
                    {contact.icon}
                  </Box>
                  <Typography variant="body2" sx={{ 
                    color: '#cbd5e1',
                    lineHeight: 1.4,
                    textAlign: 'center',
                    fontSize: '0.8rem'
                  }}>
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* Horaires d'ouverture */}
            <Box sx={{ 
              mt: 3, 
              p: 2, 
              backgroundColor: 'rgba(159, 75, 98, 0.1)', 
              borderRadius: 2,
              border: '1px solid rgba(159, 75, 98, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ 
                color: '#9f4b62', 
                fontWeight: '600', 
                mb: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                fontSize: '1rem'
              }}>
                <Support sx={{ fontSize: 18 }} />
                Horaires d'ouverture
              </Typography>
              <Stack spacing={0.5} alignItems="center">
                {[
                  'Lundi - Vendredi : 9h00 - 18h00',
                  'Samedi : 9h00 - 12h00',
                  'Dimanche : Fermé'
                ].map((horaire, index) => (
                  <Typography 
                    key={index}
                    variant="body2" 
                    sx={{ 
                      color: '#cbd5e1', 
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Box sx={{ 
                      width: 4, 
                      height: 4, 
                      backgroundColor: '#9f4b62',
                      borderRadius: '50%'
                    }} />
                    {horaire}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ 
          borderColor: 'rgba(22, 72, 161, 0.3)', 
          mb: 3,
          height: 1,
          borderRadius: 1
        }} />

        {/* Copyright et liens légaux */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          pb: 3,
          textAlign: 'center'
        }}>
          <Typography variant="body2" sx={{ 
            color: '#94a3b8',
            fontWeight: '500',
            fontSize: '0.8rem'
          }}>
            © {currentYear} GLOBAL CAR CONSULTING. Tous droits réservés.
          </Typography>
          
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              'Politique de confidentialité',
              'Conditions d\'utilisation', 
              'Mentions légales'
            ].map((link, index) => (
              <Link 
                key={index}
                href="#" 
                className="legal-link"
                sx={{ 
                  color: '#94a3b8', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.8rem',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: '#1648a1',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                {link}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
