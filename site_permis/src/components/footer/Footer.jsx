import React from 'react';
import { 
  Box, Container, Grid, Typography, Link, IconButton, Stack, Divider 
} from '@mui/material';
import { 
  Phone, Email, LocationOn, Facebook, Instagram, LinkedIn, DirectionsCar, School, Assignment, Support 
} from '@mui/icons-material';
import logo from '../../assets/logo.jpg';
import './Footer.css';

const socialButtonStyle = {
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': { backgroundColor: '#a26175' }
};

const textLinkStyle = {
  color: '#cccccc',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': { color: '#a26175' }
};

const iconTextRow = (Icon, text) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Icon sx={{ color: '#a26175' }} />
    <Typography variant="body2" sx={{ color: '#cccccc' }}>
      {text}
    </Typography>
  </Box>
);

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
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'À propos', href: '/about' },
    { name: 'FAQ', href: '/services' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className="footer" sx={{ backgroundColor: '#1a1a1a', color: 'white', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          
          {/* Logo et description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box sx={{
                width: 50, height: 50,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <img 
                  src={logo} 
                  alt="Global Car Consulting Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }} 
                />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>GLOBAL CAR</Typography>
                <Typography variant="h6" sx={{ color: '#a26175' }}>CONSULTING</Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ mb: 3, color: '#cccccc', lineHeight: 1.6 }}>
              Votre partenaire de confiance pour tous vos besoins automobiles...
            </Typography>

            {/* Réseaux sociaux */}
            <Stack direction="row" spacing={1}>
              {[Facebook, Instagram, LinkedIn].map((Icon, i) => (
                <IconButton key={i} sx={socialButtonStyle}>
                  <Icon />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>Nos Services</Typography>
            <Stack spacing={1}>
              {services.map((service, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ color: '#a26175' }}>{service.icon}</Box>
                  <Typography variant="body2" sx={{ color: '#cccccc' }}>{service.name}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Liens rapides */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>Liens Rapides</Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} sx={textLinkStyle}>{link.name}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: '600' }}>Contact</Typography>
            <Stack spacing={2}>
              {iconTextRow(Phone, '694153503 / 694265006')}
              {iconTextRow(Email, 'YENDEFREID@ICLOUD.COM')}
              {iconTextRow(LocationOn, <>Yaounde, Cameroun</>)}
            </Stack>

            <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(162, 97, 117, 0.1)', borderRadius: 2 }}>
              <Typography variant="body2" sx={{ color: '#a26175', fontWeight: '600', mb: 1 }}>
                Horaires d'ouverture :
              </Typography>
              <Typography variant="body2" sx={{ color: '#cccccc', fontSize: '0.875rem' }}>
                Lundi - Vendredi : 9h00 - 18h00<br />
                Samedi : 9h00 - 12h00<br />Dimanche : Fermé
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ 
          borderColor: 'rgba(22, 72, 161, 0.3)', 
          mb: 3,
          height: 1,
          borderRadius: 1
        }} />

        {/* Bas de page */}
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 2
        }}>
          <Typography variant="body2" sx={{ 
            color: '#94a3b8',
            fontWeight: '500',
            fontSize: '0.8rem'
          }}>
            © {currentYear} GLOBAL CAR CONSULTING. Tous droits réservés.
          </Typography>
          <Stack direction="row" spacing={3}>
            {['Politique de confidentialité', 'Conditions d\'utilisation', 'Mentions légales'].map((text, i) => (
              <Link key={i} href="#" sx={textLinkStyle}>{text}</Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
