import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Button, Container, Card, CardContent, Grid, Chip } from "@mui/material";
import { 
  ArrowForward, 
  PlayArrow, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle,
  Star,
  Security,
  Speed,
  Support,
  Verified
} from "@mui/icons-material";
import logo from "../../assets/logo.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/src/assets/HeroImage/permis-de-conduire.jpg",
      title: "Permis de Conduire",
      subtitle: "Votre liberté commence ici",
      description: "Gestion complète de votre dossier permis avec accompagnement personnalisé"
    },
    {
      src: "/src/assets/HeroImage/carte-grise.jpg",
      title: "Carte Grise",
      subtitle: "Immatriculation simplifiée",
      description: "Démarches complètes pour immatriculation et gestion de votre carte grise"
    },
    {
      src: "/src/assets/HeroImage/dedouanement.jpg",
      title: "Dédouanement",
      subtitle: "Import/Export facilité",
      description: "Accompagnement complet pour l'import/export de vos véhicules"
    },
    {
      src: "/src/assets/HeroImage/plaque-immatrication.jpg",
      title: "Plaques d'Immatriculation",
      subtitle: "Fabrication sur mesure",
      description: "Fabrication et pose de plaques conformes aux normes"
    },
    {
      src: "/src/assets/HeroImage/port-dedouanement.jpg",
      title: "Services Complets",
      subtitle: "Accompagnement personnalisé",
      description: "Solutions automobiles complètes avec expertise professionnelle"
    }
  ];

  const services = [
    {
      icon: <Verified sx={{ fontSize: 32, color: '#1648a1' }} />,
      title: "Permis de Conduire",
      description: "Gestion complète de votre dossier avec suivi personnalisé",
      features: ["Accompagnement 24/7", "Suivi en temps réel", "Garantie de réussite"],
      color: "#1648a1"
    },
    {
      icon: <Security sx={{ fontSize: 32, color: '#9f4b62' }} />,
      title: "Carte Grise",
      description: "Immatriculation simplifiée et rapide",
      features: ["Démarches en ligne", "Traitement express", "Support juridique"],
      color: "#9f4b62"
    },
    {
      icon: <Speed sx={{ fontSize: 32, color: '#1648a1' }} />,
      title: "Dédouanement",
      description: "Import/Export facilité et sécurisé",
      features: ["Procédures simplifiées", "Expertise douanière", "Gain de temps"],
      color: "#1648a1"
    },
    {
      icon: <Support sx={{ fontSize: 32, color: '#9f4b62' }} />,
      title: "Plaques d'Immatriculation",
      description: "Fabrication sur mesure et pose professionnelle",
      features: ["Conformité garantie", "Installation rapide", "Matériaux premium"],
      color: "#9f4b62"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Section Hero */}
      <Box sx={{ 
        position: 'relative',
        height: { xs: '120vh', sm: '110vh', md: '100vh' }, // Hauteur augmentée sur mobile
        width: '100%',
        paddingTop: '0', // Pas besoin de padding car le spacer de la navbar compense
        overflow: 'hidden' // Empêcher les débordements
      }}>
        {/* Slides */}
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}

        {/* Overlay simple */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(22, 72, 161, 0.8) 0%, rgba(159, 75, 98, 0.7) 100%)',
          zIndex: 2
        }} />

        {/* Contenu principal */}
        <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 3 }}>
          <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            px: { xs: 1, sm: 2 },
            pt: { xs: 1, sm: 2 },
            pb: { xs: 8, sm: 6 }, // Espace en bas pour les contrôles
            gap: { xs: 2, sm: 3 } // Espacement uniforme entre les éléments
          }}>
            {/* Badge simple */}
            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: { xs: '15px', sm: '20px' },
              px: { xs: 2, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              mb: { xs: 1, sm: 2 }, // Réduit la marge
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 }
            }}>
              <Box sx={{
                width: { xs: 24, sm: 32 },
                height: { xs: 24, sm: 32 },
                backgroundColor: '#1648a1',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
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
              <Typography variant="body2" sx={{ 
                fontWeight: '600',
                fontSize: { xs: '0.75rem', sm: '1rem' },
                letterSpacing: { xs: '0.5px', sm: '1px' },
                textTransform: 'uppercase'
              }}>
                GLOBAL CAR CONSULTING
              </Typography>
            </Box>

            {/* Titre principal */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem', xl: '5rem' },
                fontWeight: '800',
                mb: { xs: 1, sm: 2 }, // Réduit la marge
                lineHeight: 1.1,
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                px: { xs: 1, sm: 0 }
              }}
            >
              {images[currentSlide].title}
            </Typography>

            {/* Sous-titre */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.75rem', lg: '2rem' },
                mb: { xs: 1, sm: 2 }, // Réduit la marge
                opacity: 0.95,
                maxWidth: { xs: '100%', sm: '600px' },
                fontWeight: '400',
                lineHeight: 1.4,
                px: { xs: 1, sm: 0 }
              }}
            >
              {images[currentSlide].subtitle}
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
                mb: { xs: 2, sm: 3 }, // Réduit la marge
                opacity: 0.9,
                maxWidth: { xs: '100%', sm: '500px' },
                lineHeight: 1.5,
                fontWeight: '400',
                px: { xs: 1, sm: 0 }
              }}
            >
              {images[currentSlide].description}
            </Typography>

            {/* Boutons d'action */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 3 },
              mb: { xs: 2, sm: 4 }, // Réduit la marge
              width: { xs: '100%', sm: 'auto' },
              px: { xs: 1, sm: 0 }
            }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#9f4b62',
                  '&:hover': { 
                    backgroundColor: '#8a3f54',
                    transform: 'translateY(-2px)'
                  },
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: { xs: '20px', sm: '25px' },
                  fontWeight: '600',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  textTransform: 'none',
                  minWidth: { xs: '100%', sm: '200px' },
                  transition: 'all 0.2s ease'
                }}
              >
                Commencer Maintenant 
                <ArrowForward sx={{ ml: { xs: 1, sm: 2 }, fontSize: { xs: 18, sm: 20 } }} />
              </Button>
              
              <Button
                variant="outline"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.8)',
                  borderWidth: 2,
                  color: 'white',
                  '&:hover': { 
                    borderColor: '#1648a1',
                    backgroundColor: 'rgba(22, 72, 161, 0.2)'
                  },
                  px: { xs: 4, sm: 6 },
                  py: { xs: 1.5, sm: 2 },
                  borderRadius: { xs: '20px', sm: '25px' },
                  fontWeight: '600',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  textTransform: 'none',
                  minWidth: { xs: '100%', sm: '200px' },
                  transition: 'all 0.2s ease'
                }}
              >
                <PlayArrow sx={{ mr: { xs: 1, sm: 2 }, fontSize: { xs: 18, sm: 20 } }} />
                Voir la vidéo
              </Button>
            </Box>

            {/* Statistiques */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: { xs: 1.5, sm: 2 }, // Réduit l'espacement
              maxWidth: { xs: '100%', sm: '600px' },
              width: '100%',
              px: { xs: 1, sm: 0 }
            }}>
              {[
                { number: '500+', label: 'Permis délivrés' },
                { number: '1000+', label: 'Cartes grises' },
                { number: '98%', label: 'Satisfaction' },
                { number: '24h', label: 'Réponse' }
              ].map((stat, index) => (
                <Box key={index} sx={{ 
                  textAlign: 'center',
                  p: { xs: 1, sm: 1.5 }, // Réduit le padding
                  borderRadius: { xs: '10px', sm: '12px' },
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-3px)'
                  }
                }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }, // Réduit la taille
                      fontWeight: '700',
                      mb: { xs: 0.25, sm: 0.5 }, // Réduit la marge
                      color: '#1648a1'
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.75rem' }, // Réduit la taille
                      opacity: 0.9,
                      fontWeight: '500'
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>

        {/* Contrôles du carousel */}
        <Box sx={{
          position: 'absolute',
          bottom: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Ajusté pour la nouvelle hauteur
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 4,
          display: 'flex',
          gap: { xs: 0.5, sm: 1 }
        }}>
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: index === currentSlide ? { xs: '1.75rem', sm: '2rem', md: '2.5rem' } : { xs: '0.75rem', sm: '1rem' },
                height: { xs: '0.35rem', sm: '0.4rem', md: '0.5rem' },
                borderRadius: { xs: '0.2rem', sm: '0.25rem' },
                backgroundColor: index === currentSlide ? '#1648a1' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: index === currentSlide ? '#9f4b62' : 'rgba(255,255,255,0.7)'
                }
              }}
            />
          ))}
        </Box>

        {/* Boutons de navigation */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: { xs: '1rem', sm: '2rem' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.25)'
            },
            display: { xs: 'flex', md: 'flex' },
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronLeft sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: { xs: '1rem', sm: '2rem' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.25)'
            },
            display: { xs: 'flex', md: 'flex' },
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronRight sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </IconButton>
      </Box>

      {/* Section Services */}
      <Box sx={{ 
        py: { xs: 6, sm: 8 },
        backgroundColor: '#f8fafc'
      }}>
        <Container maxWidth="lg">
          {/* En-tête de la section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8 }, px: { xs: 1, sm: 0 } }}>
            <Chip
              label="NOS SERVICES"
              sx={{
                backgroundColor: '#1648a1',
                color: 'white',
                fontWeight: '600',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                px: { xs: 2, sm: 3 },
                py: { xs: 0.75, sm: 1 },
                mb: { xs: 2, sm: 3 },
                borderRadius: { xs: '12px', sm: '15px' }
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: '700',
                mb: { xs: 1.5, sm: 2 },
                color: '#1e293b',
                px: { xs: 1, sm: 0 }
              }}
            >
              Solutions Automobiles Complètes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                color: '#64748b',
                maxWidth: { xs: '100%', sm: '600px' },
                mx: 'auto',
                lineHeight: 1.6,
                px: { xs: 1, sm: 0 }
              }}
            >
              Découvrez notre gamme de services professionnels conçus pour simplifier 
              vos démarches automobiles
            </Typography>
          </Box>

          {/* Grille des services */}
          <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  sx={{
                    height: { xs: '400px', sm: '450px' },
                    borderRadius: { xs: '12px', sm: '16px' },
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    textAlign: 'center', 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between' 
                  }}>
                    {/* Icône du service */}
                    <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                      {service.icon}
                    </Box>

                    {/* Titre du service */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: '600',
                        mb: { xs: 1.5, sm: 2 },
                        color: '#1e293b',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
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
                        lineHeight: 1.5,
                        fontSize: '0.9rem'
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
                            mb: 1,
                            gap: 1
                          }}
                        >
                          <CheckCircle
                            sx={{
                              fontSize: 16,
                              color: '#10b981',
                              flexShrink: 0
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#475569',
                              fontSize: '0.8rem',
                              fontWeight: '500'
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Bouton d'action */}
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: service.color,
                        color: service.color,
                        borderWidth: 1.5,
                        borderRadius: '15px',
                        px: 2,
                        py: 1,
                        fontWeight: '500',
                        textTransform: 'none',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: service.color,
                          color: 'white',
                          borderColor: service.color
                        }
                      }}
                    >
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Section des avantages */}
          <Box sx={{ mt: { xs: 8, sm: 10 }, textAlign: 'center', px: { xs: 1, sm: 0 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
                fontWeight: '600',
                mb: { xs: 4, sm: 5 },
                color: '#1e293b'
              }}
            >
              Pourquoi nous choisir ?
            </Typography>
            
            <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="center">
              {[
                {
                  icon: <Star sx={{ fontSize: { xs: 28, sm: 32 }, color: '#1648a1' }} />,
                  title: "Excellence",
                  description: "Service premium avec une attention aux détails"
                },
                {
                  icon: <Speed sx={{ fontSize: { xs: 28, sm: 32 }, color: '#9f4b62' }} />,
                  title: "Rapidité",
                  description: "Traitement express de vos dossiers"
                },
                {
                  icon: <Security sx={{ fontSize: { xs: 28, sm: 32 }, color: '#1648a1' }} />,
                  title: "Sécurité",
                  description: "Protection de vos données personnelles"
                },
                {
                  icon: <Support sx={{ fontSize: { xs: 28, sm: 32 }, color: '#9f4b62' }} />,
                  title: "Support 24/7",
                  description: "Accompagnement à chaque étape"
                }
              ].map((advantage, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: { xs: '12px', sm: '16px' },
                      backgroundColor: 'white',
                      boxShadow: '0 2px 15px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                      }
                    }}
                  >
                    <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                      {advantage.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: '600',
                        mb: { xs: 0.75, sm: 1 },
                        color: '#1e293b',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                      }}
                    >
                      {advantage.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.5,
                        fontSize: { xs: '0.8rem', sm: '0.875rem' }
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
    </Box>
  );
};

export default Hero;
