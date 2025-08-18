import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
  Divider
} from '@mui/material';
import { Menu, Close, Phone, Email, LocationOn } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Accueil', path: '/accueil' },
    { text: 'Services', path: '/services' },
    { text: 'À propos', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  // Détecter le scroll pour changer le style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 280, height: '100%' }}>
      {/* Header du drawer */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1648a1 0%, #9f4b62 100%)',
        color: 'white',
        p: 3,
        textAlign: 'center'
      }}>
        <Box sx={{ 
          width: 60, 
          height: 60, 
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          border: '2px solid rgba(255,255,255,0.3)',
          overflow: 'hidden'
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
        <Typography variant="h6" sx={{ fontWeight: '600', mb: 0.5 }}>
          GLOBAL CAR CONSULTING
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Votre partenaire automobile de confiance
        </Typography>
      </Box>

      {/* Menu items */}
      <List sx={{ py: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            button 
            onClick={() => handleNavigation(item.path)}
            sx={{
              mx: 2,
              mb: 1,
              borderRadius: '12px',
              backgroundColor: isActive(item.path) ? 'rgba(22, 72, 161, 0.1)' : 'transparent',
              border: isActive(item.path) ? '1px solid rgba(22, 72, 161, 0.3)' : 'none',
              '&:hover': { 
                backgroundColor: 'rgba(22, 72, 161, 0.05)',
                transform: 'translateX(5px)'
              },
              transition: 'all 0.2s ease'
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: isActive(item.path) ? '#1648a1' : '#1e293b',
                fontWeight: isActive(item.path) ? '600' : '500',
                '& .MuiTypography-root': {
                  fontSize: '1rem'
                }
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ mx: 2, mb: 2 }} />

      {/* Informations de contact */}
      <Box sx={{ px: 3, pb: 3 }}>
        <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 2, fontWeight: '600' }}>
          Contact Rapide
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1 }}>
          <Phone sx={{ fontSize: 18, color: '#1648a1' }} />
          <Typography variant="body2" sx={{ color: '#475569' }}>
            +33 1 23 45 67 89
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1 }}>
          <Email sx={{ fontSize: 18, color: '#1648a1' }} />
          <Typography variant="body2" sx={{ color: '#475569' }}>
            contact@globalcar.fr
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn sx={{ fontSize: 18, color: '#1648a1' }} />
          <Typography variant="body2" sx={{ color: '#475569' }}>
            Paris, France
          </Typography>
        </Box>
      </Box>

      {/* Bouton fermer */}
      <Box sx={{ 
        position: 'absolute', 
        top: 16, 
        right: 16 
      }}>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.3)'
            }
          }}
        >
          <Close />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Navbar normale (non fixe) - visible au début */}
      {!scrolled && (
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.05)',
            color: '#1e293b',
            transition: 'all 0.3s ease',
            borderBottom: '1px solid rgba(22, 72, 161, 0.1)'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 0 }, minHeight: '70px', transition: 'all 0.3s ease' }}>
              {/* Navigation desktop */}
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                flexGrow: 1,
                justifyContent: 'center',
                gap: 1
              }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: isActive(item.path) ? '#1648a1' : '#475569',
                      fontWeight: isActive(item.path) ? '600' : '500',
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      '&:hover': { 
                        backgroundColor: 'rgba(22, 72, 161, 0.08)',
                        color: '#1648a1',
                        transform: 'translateY(-2px)'
                      },
                      px: 3,
                      py: 1.5,
                      borderRadius: '12px',
                      position: 'relative',
                      transition: 'all 0.2s ease',
                      '&::after': isActive(item.path) ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '3px',
                        backgroundColor: '#1648a1',
                        borderRadius: '2px'
                      } : {}
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Bouton menu mobile */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2, 
                  display: { md: 'none' },
                  backgroundColor: 'rgba(22, 72, 161, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(22, 72, 161, 0.2)'
                  }
                }}
              >
                <Menu />
              </IconButton>

              {/* Boutons d'action */}
              <Box sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                gap: 2,
                alignItems: 'center'
              }}>
                <Button 
                  variant="outlined"
                  sx={{ 
                    borderColor: '#1648a1',
                    color: '#1648a1',
                    borderWidth: 1.5,
                    '&:hover': { 
                      borderColor: '#9f4b62',
                      backgroundColor: 'rgba(159, 75, 98, 0.05)',
                      transform: 'translateY(-2px)'
                    },
                    px: 3,
                    py: 1.5,
                    borderRadius: '12px',
                    fontWeight: '600',
                    textTransform: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Nous contacter
                </Button>
                <Button 
                  variant="contained" 
                  sx={{ 
                    background: 'linear-gradient(135deg, #9f4b62 0%, #8a3f54 100%)',
                    '&:hover': { 
                      background: 'linear-gradient(135deg, #8a3f54 0%, #9f4b62 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(159, 75, 98, 0.4)'
                    },
                    px: 3,
                    py: 1.5,
                    borderRadius: '12px',
                    fontWeight: '600',
                    textTransform: 'none',
                    boxShadow: '0 4px 20px rgba(159, 75, 98, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Réserver
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {/* Navbar fixe compacte lors du scroll */}
      {scrolled && (
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            color: '#1e293b',
            transition: 'all 0.3s ease',
            borderBottom: '1px solid rgba(22, 72, 161, 0.1)',
            top: 0, // Fixée tout en haut
            zIndex: 1200
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ px: { xs: 0 }, minHeight: '60px', transition: 'all 0.3s ease' }}>
              {/* Logo compact lors du scroll */}
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                mr: { xs: 2, md: 4 }
              }} onClick={() => navigate('/accueil')}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  background: 'linear-gradient(135deg, #1648a1 0%, #9f4b62 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(22, 72, 161, 0.3)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 25px rgba(22, 72, 161, 0.4)'
                  }
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
                <Box sx={{ ml: 2, display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: '700', 
                    color: '#1648a1',
                    lineHeight: 1.2,
                    fontSize: '1rem'
                  }}>
                    GLOBAL CAR
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: '#64748b',
                    fontWeight: '500',
                    fontSize: '0.7rem'
                  }}>
                    CONSULTING
                  </Typography>
                </Box>
              </Box>

              {/* Navigation desktop */}
              <Box sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                flexGrow: 1,
                justifyContent: 'center',
                gap: 1
              }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: isActive(item.path) ? '#1648a1' : '#475569',
                      fontWeight: isActive(item.path) ? '600' : '500',
                      fontSize: '0.9rem',
                      textTransform: 'none',
                      '&:hover': { 
                        backgroundColor: 'rgba(22, 72, 161, 0.08)',
                        color: '#1648a1',
                        transform: 'translateY(-2px)'
                      },
                      px: 2.5,
                      py: 1,
                      borderRadius: '10px',
                      position: 'relative',
                      transition: 'all 0.2s ease',
                      '&::after': isActive(item.path) ? {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        backgroundColor: '#1648a1',
                        borderRadius: '1px'
                      } : {}
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>

              {/* Bouton menu mobile */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2, 
                  display: { md: 'none' },
                  backgroundColor: 'rgba(22, 72, 161, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(22, 72, 161, 0.2)'
                  }
                }}
              >
                <Menu />
              </IconButton>

              {/* Boutons d'action */}
              <Box sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                gap: 1.5,
                alignItems: 'center'
              }}>
                <Button 
                  variant="outlined"
                  size="small"
                  sx={{ 
                    borderColor: '#1648a1',
                    color: '#1648a1',
                    borderWidth: 1.5,
                    '&:hover': { 
                      borderColor: '#9f4b62',
                      backgroundColor: 'rgba(159, 75, 98, 0.05)',
                      transform: 'translateY(-2px)'
                    },
                    px: 2.5,
                    py: 1,
                    borderRadius: '10px',
                    fontWeight: '600',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Nous contacter
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  sx={{ 
                    background: 'linear-gradient(135deg, #9f4b62 0%, #8a3f54 100%)',
                    '&:hover': { 
                      background: 'linear-gradient(135deg, #8a3f54 0%, #9f4b62 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(159, 75, 98, 0.4)'
                    },
                    px: 2.5,
                    py: 1,
                    borderRadius: '10px',
                    fontWeight: '600',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    boxShadow: '0 3px 15px rgba(159, 75, 98, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Réserver
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}

      {/* Spacer pour compenser la navbar fixe lors du scroll */}
      {scrolled && <Box sx={{ height: '60px' }} />}

      {/* Drawer mobile */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;