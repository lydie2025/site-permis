import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Button, Container } from "@mui/material";
import { ArrowForward, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import logo from "/logo.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/HeroImage/permis-de-conduire.jpg",
      title: "Permis de Conduire",
      subtitle: "Votre liberté commence ici",
      description: "Gestion complète de votre dossier permis avec accompagnement personnalisé"
    },
    {
      src: "/HeroImage/carte-grise.jpg",
      title: "Carte Grise",
      subtitle: "Immatriculation simplifiée",
      description: "Démarches complètes pour immatriculation et gestion de votre carte grise"
    },
    {
      src: "/HeroImage/dedouanement.jpg",
      title: "Dédouanement",
      subtitle: "Import/Export facilité",
      description: "Accompagnement complet pour l'import/export de vos véhicules"
    },
    {
      src: "/HeroImage/plaque-immatrication.jpg",
      title: "Plaques d'Immatriculation",
      subtitle: "Fabrication sur mesure",
      description: "Fabrication et pose de plaques conformes aux normes"
    },
    {
      src: "/HeroImage/port-dedouanement.jpg",
      title: "Services Complets",
      subtitle: "Accompagnement personnalisé",
      description: "Solutions automobiles complètes avec expertise professionnelle"
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
        height: { xs: '90vh', sm: '85vh', md: '80vh' },
        width: '100%',
        paddingTop: '0',
        overflow: 'hidden'
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

        {/* Overlay */}
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
            pb: { xs: 8, sm: 6 },
            gap: { xs: 2, sm: 3 }
          }}>
            {/* Badge */}
            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: { xs: '15px', sm: '20px' },
              px: { xs: 2, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              mb: { xs: 1, sm: 2 },
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
                mb: { xs: 1, sm: 2 },
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
                mb: { xs: 1, sm: 2 },
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
                mb: { xs: 2, sm: 3 },
                opacity: 0.9,
                maxWidth: { xs: '100%', sm: '500px' },
                lineHeight: 1.5,
                fontWeight: '400',
                px: { xs: 1, sm: 0 }
              }}
            >
              {images[currentSlide].description}
            </Typography>

            {/* Bouton d'action */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 3 },
              mb: { xs: 2, sm: 4 },
              width: { xs: '100%', sm: 'auto' },
              px: { xs: 1, sm: 0 }
            }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/services')}
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
            </Box>

            {/* Statistiques */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: { xs: 1.5, sm: 2 },
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
                  p: { xs: 1, sm: 1.5 },
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
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                      fontWeight: '700',
                      mb: { xs: 0.25, sm: 0.5 },
                      color: '#1648a1'
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
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
          bottom: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
            left: { xs: '1rem', sm: '2rem', md: '3rem' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.4)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderColor: 'rgba(255,255,255,0.6)',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
            },
            display: { xs: 'flex', md: 'flex' },
            width: { xs: 48, sm: 56, md: 64 },
            height: { xs: 48, sm: 56, md: 64 },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:active': {
              transform: 'translateY(-50%) scale(0.95)'
            }
          }}
        >
          <ChevronLeft sx={{ 
            fontSize: { xs: 24, sm: 28, md: 32 },
            fontWeight: 'bold'
          }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: { xs: '1rem', sm: '2rem', md: '3rem' },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 4,
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.4)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderColor: 'rgba(255,255,255,0.6)',
              transform: 'translateY(-50%) scale(1.1)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
            },
            display: { xs: 'flex', md: 'flex' },
            width: { xs: 48, sm: 56, md: 64 },
            height: { xs: 48, sm: 56, md: 64 },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:active': {
              transform: 'translateY(-50%) scale(0.95)'
            }
          }}
        >
          <ChevronRight sx={{ 
            fontSize: { xs: 24, sm: 28, md: 32 },
            fontWeight: 'bold'
          }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
