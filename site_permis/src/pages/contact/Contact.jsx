import React, { useState } from "react";
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
  Alert,
  Snackbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import { 
  Phone, 
  Email, 
  LocationOn, 
  Schedule, 
  Send, 
  CheckCircle,
  AccessTime,
  Map
} from "@mui/icons-material";
import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    setSnackbar({
      open: true,
      message: "Votre message a été envoyé avec succès !",
      severity: "success"
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Téléphone",
      main: "694153503 / 694265006",
      subtitle: "Lun-Ven: 9h-18h. Sam: 9h-12h"
    },
    {
      icon: <Email />,
      title: "E-mail",
      main: "YENDEFREID@ICLOUD.COM",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: <LocationOn />,
      title: "Adresse",
      main: "123 Avenue des Champs-Élysées",
      subtitle: "75000 Paris, France"
    },
    {
      icon: <Schedule />,
      title: "Horaires",
      main: "Lundi - Vendredi",
      subtitle: "9h00 - 18h00"
    }
  ];

  const services = [
    "Permis de Conduire",
    "Carte Grise",
    "Dédouanement",
    "Auto-École",
    "Accompagnement"
  ];

  const whyChooseUs = [
    "Accompagnement personnalisé",
    "Expertise reconnue",
    "Ils sont écoutés",
    "Tarifs transparents",
    "Assistance 24h/24 et 7/7"
  ];

  return (
    <Box className="contact-page">
      <Topbar />
      <Header />
      <Navbar />

      {/* Hero Section */}
      <Box className="contact-hero">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h2" className="hero-title">
              Contactez-Nous
            </Typography>
            <Typography variant="h5" className="hero-subtitle">
              Nous sommes là pour vous accompagner dans toutes vos démarches automobiles.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      <Container maxWidth="lg" sx={{ mt: -3, mb: 4 }}>
        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ 
                textAlign: 'center', 
                p: 2, 
                height: '100%',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 2
              }}>
                <CardContent>
                  <Box sx={{ 
                    color: '#a26175', 
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    color: '#1946a3', 
                    fontWeight: 'bold',
                    mb: 1
                  }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontWeight: '600',
                    mb: 0.5
                  }}>
                    {info.main}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#666',
                    fontSize: '0.875rem'
                  }}>
                    {info.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" className="contact-container">
        <Grid container spacing={6}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Card className="contact-card">
              <Typography variant="h4" className="form-title">
                Envoyez-nous un message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Prénom *"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom *"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="E-mail *"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Sélectionnez un service</InputLabel>
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        label="Sélectionnez un service"
                      >
                        {services.map((service, index) => (
                          <MenuItem key={index} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message *"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      startIcon={<Send />}
                      className="submit-btn"
                    >
                      ENVOYER LE MESSAGE
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          {/* Google Maps Placeholder */}
          

          {/* Pourquoi nous choisir */}
          <Grid item xs={12} md={3}>
            <Card className="why-card">
              <Typography variant="h5" className="why-title">
                Pourquoi choisir ?
              </Typography>
              <Stack spacing={2}>
                {whyChooseUs.map((item, index) => (
                  <Box key={index} className="why-item">
                    <CheckCircle className="icon" />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        backgroundColor: '#f8f9fa', 
        py: 6, 
        mt: 6,
        borderTop: '1px solid #e9ecef'
      }}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" sx={{ 
              fontWeight: 'bold',
              color: '#1946a3',
              mb: 2
            }}>
              Prêt à démarrer votre projet ?
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#666',
              mb: 4,
              maxWidth: 600,
              mx: 'auto'
            }}>
              Contactez-nous dès aujourd'hui pour un devis gratuit et un accompagnement personnalisé pour vos démarches automobiles.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                size="large"
                onClick={() => window.open('tel:694153503')}
                sx={{ 
                  backgroundColor: '#a26175',
                  '&:hover': { backgroundColor: '#8a4f63' },
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  fontWeight: '600'
                }}
              >
                DEMANDER UN DEVIS GRATUIT
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => window.open('tel:694153503')}
                sx={{ 
                  borderColor: '#a26175',
                  color: '#a26175',
                  '&:hover': { 
                    borderColor: '#1946a3',
                    backgroundColor: 'rgba(25, 70, 163, 0.1)'
                  },
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  fontWeight: '600'
                }}
              >
                APPELEZ MAINTENANT
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
