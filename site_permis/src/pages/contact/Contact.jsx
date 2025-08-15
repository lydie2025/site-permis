import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  TextField,
  Button,
  Stack,
  Chip,
  Alert,
  Snackbar
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  Schedule,
  Send,
  CheckCircle
} from '@mui/icons-material';
import Topbar from '../../components/topbar/Topbar';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form data:', formData);
    
    setSnackbar({
      open: true,
      message: 'Votre message a été envoyé avec succès !',
      severity: 'success'
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      subtitle: 'Lun-Ven: 9h-18h, Sam: 9h-12h'
    },
    {
      icon: <Email sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Email',
      value: 'contact@globalcarconsulting.fr',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Adresse',
      value: '123 Avenue des Champs-Élysées',
      subtitle: '75008 Paris, France'
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'Horaires',
      value: 'Lundi - Vendredi',
      subtitle: '9h00 - 18h00'
    }
  ];

  const services = [
    'Permis de Conduire',
    'Carte Grise & Plaques',
    'Dédouanement',
    'Auto-École',
    'Autre'
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
              Contactez-Nous
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
              Nous sommes là pour vous accompagner dans toutes vos démarches automobiles. 
              Contactez-nous pour un devis gratuit et un accompagnement personnalisé.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                height: '100%',
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
                  <Box sx={{ mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: '600', 
                      mb: 1,
                      color: '#1a1a1a'
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 1,
                      fontWeight: '500',
                      color: '#333'
                    }}
                  >
                    {info.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      fontSize: '0.875rem'
                    }}
                  >
                    {info.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form and Map */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card sx={{ 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              borderRadius: 3,
              p: 4
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#1a1a1a'
                }}
              >
                Envoyez-nous un message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Prénom"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service souhaité"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      select
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                      placeholder="Décrivez votre besoin ou posez-nous vos questions..."
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      sx={{
                        backgroundColor: '#ff6b35',
                        '&:hover': { backgroundColor: '#e55a2b' },
                        py: 2,
                        borderRadius: 2,
                        fontWeight: '600',
                        fontSize: '1.1rem'
                      }}
                    >
                      Envoyer le message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          {/* Map and Additional Info */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={4}>
              {/* Map Placeholder */}
              <Card sx={{ 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                overflow: 'hidden'
              }}>
                <Box sx={{ 
                  height: 300, 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666'
                }}>
                  <Typography variant="h6">
                    Carte Google Maps
                  </Typography>
                </Box>
              </Card>

              {/* Why Choose Us */}
              <Card sx={{ 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 3,
                p: 4
              }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#1a1a1a'
                  }}
                >
                  Pourquoi nous choisir ?
                </Typography>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                    <Typography variant="body1">
                      Accompagnement personnalisé
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                    <Typography variant="body1">
                      Expertise reconnue
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                    <Typography variant="body1">
                      Délais optimisés
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                    <Typography variant="body1">
                      Tarifs transparents
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle sx={{ color: '#ff6b35' }} />
                    <Typography variant="body1">
                      Support 24/7
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        backgroundColor: '#f8f9fa',
        py: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 'bold',
                mb: 3,
                color: '#1a1a1a'
              }}
            >
              Prêt à commencer votre projet ?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#666',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Contactez-nous dès aujourd'hui pour un devis gratuit et un accompagnement 
              personnalisé pour vos démarches automobiles.
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
                  borderColor: '#ff6b35',
                  color: '#ff6b35',
                  '&:hover': { 
                    backgroundColor: '#ff6b35',
                    color: 'white'
                  },
                  px: 4,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: '600'
                }}
              >
                Appeler maintenant
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
