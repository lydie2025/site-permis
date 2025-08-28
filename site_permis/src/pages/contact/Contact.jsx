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
      main: "Centre-ville de Yaoundé",
      subtitle: "Yaoundé, Cameroun"
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
      <Navbar />
      <Header/>

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
                p: 3, 
                height: '100%',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                borderRadius: 3,
                border: '1px solid rgba(25, 70, 163, 0.1)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 35px rgba(25, 70, 163, 0.15)',
                  borderColor: 'rgba(25, 70, 163, 0.3)'
                }
              }}>
                <CardContent>
                  <Box sx={{ 
                    color: '#a26175', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(5deg)'
                    }
                  }}>
                    {React.cloneElement(info.icon, { 
                      sx: { 
                        fontSize: 48,
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                      } 
                    })}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    color: '#1946a3', 
                    fontWeight: '800',
                    mb: 1.5,
                    fontSize: '1.1rem'
                  }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontWeight: '700',
                    mb: 1,
                    color: '#1e293b',
                    fontSize: '1rem'
                  }}>
                    {info.main}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#64748b',
                    fontSize: '0.875rem',
                    lineHeight: 1.5
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
            <Card sx={{
              padding: 3,
              borderRadius: 4,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(25, 70, 163, 0.1)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(25, 70, 163, 0.15)'
              }
            }}>
              <Typography variant="h4" sx={{
                marginBottom: 3,
                color: '#1946a3',
                fontWeight: '800',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #1946a3 0%, #a26175 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.75rem', md: '2rem' }
              }}>
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(25, 70, 163, 0.3)',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a3'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a3',
                          borderWidth: '2px'
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          fontWeight: '500',
                          '&.Mui-focused': {
                            color: '#1946a3',
                            fontWeight: '600'
                          }
                        }
                      }}
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(25, 70, 163, 0.3)',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1',
                          borderWidth: '2px'
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          fontWeight: '500',
                          '&.Mui-focused': {
                            color: '#1946a1',
                            fontWeight: '600'
                          }
                        }
                      }}
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(25, 70, 163, 0.3)',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1',
                          borderWidth: '2px'
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          fontWeight: '500',
                          '&.Mui-focused': {
                            color: '#1946a1',
                            fontWeight: '600'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(25, 70, 163, 0.3)',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1',
                          borderWidth: '2px'
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          fontWeight: '500',
                          '&.Mui-focused': {
                            color: '#1946a1',
                            fontWeight: '600'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel sx={{
                        color: '#64748b',
                        fontWeight: '500',
                        '&.Mui-focused': {
                          color: '#1946a1',
                          fontWeight: '600'
                        }
                      }}>
                        Sélectionnez un service
                      </InputLabel>
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        label="Sélectionnez un service"
                        variant="outlined"
                        sx={{
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(25, 70, 163, 0.3)',
                            borderWidth: '2px',
                            transition: 'all 0.3s ease'
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#1946a1'
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#1946a1',
                            borderWidth: '2px'
                          }
                        }}
                      >
                        {services.map((service, index) => (
                          <MenuItem key={index} value={service} sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(25, 70, 163, 0.1)'
                            },
                            '&.Mui-selected': {
                              backgroundColor: 'rgba(25, 70, 163, 0.2)',
                              '&:hover': {
                                backgroundColor: 'rgba(25, 70, 163, 0.3)'
                              }
                            }
                          }}>
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 3,
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.15)'
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(25, 70, 163, 0.2)'
                          }
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(25, 70, 163, 0.3)',
                          borderWidth: '2px',
                          transition: 'all 0.3s ease'
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1'
                        },
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1946a1',
                          borderWidth: '2px'
                        },
                        '& .MuiInputLabel-root': {
                          color: '#64748b',
                          fontWeight: '500',
                          '&.Mui-focused': {
                            color: '#1946a1',
                            fontWeight: '600'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      startIcon={<Send />}
                      sx={{
                        backgroundColor: 'linear-gradient(135deg, #1946a3 0%, #a26175 100%)',
                        background: 'linear-gradient(135deg, #1946a3 0%, #a26175 100%)',
                        color: 'white',
                        borderRadius: 3,
                        py: 2.5,
                        px: 4,
                        fontWeight: '700',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 25px rgba(25, 70, 163, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #a26175 0%, #1946a3 100%)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 15px 35px rgba(25, 70, 163, 0.4)'
                        },
                        '&:active': {
                          transform: 'translateY(-1px)',
                          boxShadow: '0 5px 15px rgba(25, 70, 163, 0.3)'
                        }
                      }}
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
            <Card sx={{
              padding: 3,
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(25, 70, 163, 0.05) 0%, rgba(162, 97, 117, 0.05) 100%)',
              border: '1px solid rgba(25, 70, 163, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(25, 70, 163, 0.12)',
                borderColor: 'rgba(25, 70, 163, 0.25)'
              }
            }}>
              <Typography variant="h5" sx={{
                marginBottom: 2.5,
                color: '#1946a3',
                fontWeight: '800',
                textAlign: 'center',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                background: 'linear-gradient(135deg, #1946a3 0%, #a26175 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Pourquoi nous choisir ?
              </Typography>
              <Stack spacing={2.5}>
                {whyChooseUs.map((item, index) => (
                  <Box key={index} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(25, 70, 163, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transform: 'translateX(5px)',
                      borderColor: 'rgba(25, 70, 163, 0.2)'
                    }
                  }}>
                    <CheckCircle sx={{
                      color: '#10b981',
                      fontSize: 24,
                      filter: 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))'
                    }} />
                    <Typography variant="body2" sx={{
                      color: '#1e293b',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      lineHeight: 1.4
                    }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, rgba(25, 70, 163, 0.05) 0%, rgba(162, 97, 117, 0.05) 100%)', 
        py: 8, 
        mt: 8,
        borderTop: '1px solid rgba(25, 70, 163, 0.1)',
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
          background: 'radial-gradient(circle at 20% 80%, rgba(25, 70, 163, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(162, 97, 117, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box textAlign="center">
            <Typography variant="h3" sx={{ 
              fontWeight: '800',
              background: 'linear-gradient(135deg, #1946a3 0%, #a26175 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }
            }}>
              Prêt à démarrer votre projet ?
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#64748b',
              mb: 5,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}>
              Contactez-nous dès aujourd'hui pour un devis gratuit et un accompagnement personnalisé pour vos démarches automobiles.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3}
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                size="large"
                onClick={() => window.open('tel:694153503')}
                sx={{ 
                  background: 'linear-gradient(135deg, #a26175 0%, #8a4f63 100%)',
                  color: 'white',
                  '&:hover': { 
                    background: 'linear-gradient(135deg, #8a4f63 0%, #a26175 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 35px rgba(162, 97, 117, 0.4)'
                  },
                  px: 5,
                  py: 2.5,
                  borderRadius: 3,
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(162, 97, 117, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                DEMANDER UN DEVIS GRATUIT
              </Button>
              
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => window.open('tel:694153503')}
                sx={{ 
                  borderColor: '#1946a3',
                  borderWidth: '2px',
                  color: '#1946a3',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': { 
                    borderColor: '#a26175',
                    color: '#a26175',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 35px rgba(25, 70, 163, 0.2)'
                  },
                  px: 5,
                  py: 2.5,
                  borderRadius: 3,
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
