import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Phone, Email, LocationOn, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../../assets/logo.jpg';
import './topbar.css';

const Topbar = () => {
  return (
    <Box className="topbar" sx={{ 
      backgroundColor: '#0f172a', 
      color: 'white',
      height: '40px', // Hauteur fixe
      display: { xs: 'none', md: 'block' },
      borderBottom: '1px solid rgba(22, 72, 161, 0.2)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #1648a1, #9f4b62, #1648a1)',
        backgroundSize: '200% 100%',
        animation: 'gradientShift 3s ease-in-out infinite'
      }
    }}>
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100%'
        }}>
          {/* Logo et informations de contact */}
          <Stack direction="row" spacing={4} alignItems="center">
            {/* Logo */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}>
              <Box sx={{ 
                width: 24, 
                height: 24, 
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid rgba(22, 72, 161, 0.3)'
              }}>
                <img 
                  src={logo} 
                  alt="Global Car Consulting Logo" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }} 
                />
              </Box>
              <Typography variant="body2" sx={{ 
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#1648a1',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                GCC
              </Typography>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                '& .contact-icon': {
                  color: '#9f4b62'
                }
              }
            }}>
              <Phone className="contact-icon" sx={{ 
                fontSize: 18, 
                color: '#1648a1',
                transition: 'color 0.2s ease'
              }} />
              <Typography variant="body2" sx={{ 
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#e2e8f0'
              }}>
                +33 1 23 45 67 89
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                '& .contact-icon': {
                  color: '#9f4b62'
                }
              }
            }}>
              <Email className="contact-icon" sx={{ 
                fontSize: 18, 
                color: '#1648a1',
                transition: 'color 0.2s ease'
              }} />
              <Typography variant="body2" sx={{ 
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#e2e8f0'
              }}>
                contact@globalcarconsulting.fr
              </Typography>
            </Box>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'translateY(-1px)',
                '& .contact-icon': {
                  color: '#9f4b62'
                }
              }
            }}>
              <LocationOn className="contact-icon" sx={{ 
                fontSize: 18, 
                color: '#1648a1',
                transition: 'color 0.2s ease'
              }} />
              <Typography variant="body2" sx={{ 
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#e2e8f0'
              }}>
                Paris, France
              </Typography>
            </Box>
          </Stack>

          {/* Réseaux sociaux */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              size="small" 
              className="social-icon"
              sx={{ 
                color: '#94a3b8',
                backgroundColor: 'rgba(22, 72, 161, 0.1)',
                border: '1px solid rgba(22, 72, 161, 0.2)',
                borderRadius: '8px',
                width: 36,
                height: 36,
                transition: 'all 0.2s ease',
                '&:hover': { 
                  color: '#9f4b62',
                  backgroundColor: 'rgba(159, 75, 98, 0.1)',
                  borderColor: '#9f4b62',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(159, 75, 98, 0.3)'
                }
              }}
            >
              <Facebook sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton 
              size="small" 
              className="social-icon"
              sx={{ 
                color: '#94a3b8',
                backgroundColor: 'rgba(22, 72, 161, 0.1)',
                border: '1px solid rgba(22, 72, 161, 0.2)',
                borderRadius: '8px',
                width: 36,
                height: 36,
                transition: 'all 0.2s ease',
                '&:hover': { 
                  color: '#9f4b62',
                  backgroundColor: 'rgba(159, 75, 98, 0.1)',
                  borderColor: '#9f4b62',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(159, 75, 98, 0.3)'
                }
              }}
            >
              <Instagram sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton 
              size="small" 
              className="social-icon"
              sx={{ 
                color: '#94a3b8',
                backgroundColor: 'rgba(22, 72, 161, 0.1)',
                border: '1px solid rgba(22, 72, 161, 0.2)',
                borderRadius: '8px',
                width: 36,
                height: 36,
                transition: 'all 0.2s ease',
                '&:hover': { 
                  color: '#9f4b62',
                  backgroundColor: 'rgba(159, 75, 98, 0.1)',
                  borderColor: '#9f4b62',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(159, 75, 98, 0.3)'
                }
              }}
            >
              <LinkedIn sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Topbar;
