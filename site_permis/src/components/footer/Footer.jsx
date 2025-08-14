import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  Stack,
  Divider
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
  Support
} from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Permis de Conduire', icon: <DirectionsCar /> },
    { name: 'Carte Grise', icon: <Assignment /> },
    { name: 'Dédouanement', icon: <Assignment /> },
    { name: 'Auto-École', icon: <School /> },
    { name: 'Accompagnement', icon: <Support /> }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/accueil' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'À propos', href: '/accueil' },
    { name: 'FAQ', href: '/services' }
  ];

  return (
    <Box className="footer" sx={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white',
      pt: 6,
      pb: 3
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Informations de l'entreprise */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 2 
              }}>
                <Box sx={{ 
                  width: 50, 
                  height: 50, 
                  backgroundColor: '#ff6b35',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  GC
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    GLOBAL CAR
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#ff6b35' }}>
                    CONSULTING
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Typography variant="body2" sx={{ mb: 3, color: '#cccccc', lineHeight: 1.6 }}>
              Votre partenaire de confiance pour tous vos besoins automobiles. 
              Nous simplifions vos démarches administratives et vous accompagnons 
              dans l'obtention de votre permis de conduire.
            </Typography>

            {/* Réseaux sociaux */}
            <Stack direction="row" spacing={1}>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: '#ff6b35' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: '#ff6b35' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton 
                sx={{ 
                  color: 'white', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': { backgroundColor: '#ff6b35' }
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>
              Nos Services
            </Typography>
            <Stack spacing={1}>
              {services.map((service, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ color: '#ff6b35' }}>
                    {service.icon}
                  </Box>
                  <Typography variant="body2" sx={{ color: '#cccccc' }}>
                    {service.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Liens rapides */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>
              Liens Rapides
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  sx={{ 
                    color: '#cccccc',
                    textDecoration: 'none',
                    '&:hover': { color: '#ff6b35' },
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>
              Contact
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone sx={{ color: '#ff6b35' }} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  +33 1 23 45 67 89
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Email sx={{ color: '#ff6b35' }} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  contact@globalcarconsulting.fr
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOn sx={{ color: '#ff6b35' }} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </Typography>
              </Box>
            </Stack>

            <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: 2 }}>
              <Typography variant="body2" sx={{ color: '#ff6b35', fontWeight: '600', mb: 1 }}>
                Horaires d'ouverture :
              </Typography>
              <Typography variant="body2" sx={{ color: '#cccccc', fontSize: '0.875rem' }}>
                Lundi - Vendredi : 9h00 - 18h00<br />
                Samedi : 9h00 - 12h00<br />
                Dimanche : Fermé
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />

        {/* Copyright */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: '#cccccc' }}>
            © {currentYear} GLOBAL CAR CONSULTING. Tous droits réservés.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link 
              href="#" 
              sx={{ 
                color: '#cccccc', 
                textDecoration: 'none',
                '&:hover': { color: '#ff6b35' }
              }}
            >
              Politique de confidentialité
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: '#cccccc', 
                textDecoration: 'none',
                '&:hover': { color: '#ff6b35' }
              }}
            >
              Conditions d'utilisation
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: '#cccccc', 
                textDecoration: 'none',
                '&:hover': { color: '#ff6b35' }
              }}
            >
              Mentions légales
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
