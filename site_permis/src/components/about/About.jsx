import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  Button
} from "@mui/material";
import {
  Business,
  EmojiEvents,
  Group,
  TrendingUp,
  CheckCircle,
  Star
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import Topbar from "../topbar/Topbar";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "500+", label: "Clients satisfaits", icon: <Star /> },
    { number: "10+", label: "Années d'expérience", icon: <TrendingUp /> },
    { number: "98%", label: "Taux de réussite", icon: <EmojiEvents /> },
    { number: "24/7", label: "Support client", icon: <Group /> }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque service que nous fournissons",
      icon: <Star sx={{ fontSize: 40, color: '#1946a3' }} />
    },
    {
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour améliorer nos services",
      icon: <TrendingUp sx={{ fontSize: 40, color: '#a26175' }} />
    },
    {
      title: "Confiance",
      description: "La confiance de nos clients est notre plus grande récompense",
      icon: <CheckCircle sx={{ fontSize: 40, color: '#1946a3' }} />
    }
  ];

  const team = [
    {
      name: "Jean Dupont",
      role: "Directeur Général",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["Gestion", "Stratégie", "Leadership"]
    },
    {
      name: "Marie Martin",
      role: "Responsable Services",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      expertise: ["Services clients", "Formation", "Qualité"]
    },
    {
      name: "Pierre Durand",
      role: "Expert Automobile",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["Technique", "Conseil", "Innovation"]
    }
  ];

  return (
    <Box className="about-page">
      <Navbar />
      <Header />

      {/* Hero Section */}
      <Box className="about-hero">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h1" className="hero-title">
              À Propos de Nous
            </Typography>
            <Typography variant="h4" className="hero-subtitle">
              Votre partenaire de confiance depuis plus de 10 ans dans le domaine automobile
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" className="mission-container">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="mission-content"><br></br>
              <Typography variant="h3" className="section-title">
                Notre Mission
              </Typography>
              <Typography variant="body1" className="mission-text">
                Chez GLOBAL CAR CONSULTING, nous nous engageons à simplifier vos démarches 
                automobiles en vous offrant un service personnalisé et professionnel. 
                Notre équipe d'experts vous accompagne à chaque étape pour garantir 
                votre satisfaction et votre tranquillité d'esprit.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                className="cta-button"
                startIcon={<Business />}
                onClick={() => navigate('/services')}
              >
                Découvrir nos services
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box className="stats-section">
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card className="stat-card">
                  <CardContent className="stat-content">
                    <Box className="stat-icon">
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" className="stat-number">
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" className="stat-label">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" className="values-container">
        <Typography variant="h3" className="section-title text-center">
          Nos Valeurs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="value-card">
                <CardContent className="value-content">
                  <Box className="value-icon">
                    {value.icon}
                  </Box>
                  <Typography variant="h5" className="value-title">
                    {value.title}
                  </Typography>
                  <Typography variant="body1" className="value-description">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box className="team-section">
        <Container maxWidth="lg">
          <Typography variant="h3" className="section-title text-center">
            Notre Équipe
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {team.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="team-card">
                  <CardContent className="team-content">
                    <Avatar 
                      src={member.avatar} 
                      alt={member.name}
                      className="team-avatar"
                    />
                    <Typography variant="h5" className="member-name">
                      {member.name}
                    </Typography>
                    <Typography variant="body1" className="member-role">
                      {member.role}
                    </Typography>
                    <Stack direction="row" spacing={1} className="expertise-tags">
                      {member.expertise.map((skill, idx) => (
                        <Chip 
                          key={idx} 
                          label={skill} 
                          size="small"
                          className="expertise-chip"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="about-cta">
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h3" className="cta-title">
              Prêt à nous faire confiance ?
            </Typography>
            <Typography variant="h6" className="cta-subtitle">
              Contactez-nous dès aujourd'hui pour un accompagnement personnalisé
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" className="cta-buttons">
              <Button 
                variant="contained" 
                size="large"
                className="primary-cta-btn"
                onClick={() => navigate('/contact')}
              >
                Nous contacter
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                className="secondary-cta-btn"
                onClick={() => navigate('/services')}
              >
                En savoir plus
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default About;
