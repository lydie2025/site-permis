import React, { useState } from 'react';
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
  useMediaQuery
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Accueil', path: '/accueil' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Box sx={{ 
          width: 40, 
          height: 40, 
          backgroundColor: '#ff6b35',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          GC
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            button 
            onClick={() => handleNavigation(item.path)}
            sx={{
              backgroundColor: isActive(item.path) ? '#fff3e0' : 'transparent',
              '&:hover': { backgroundColor: '#fff3e0' }
            }}
          >
            <ListItemText 
              primary={item.text} 
              sx={{ 
                color: isActive(item.path) ? '#ff6b35' : '#1a1a1a',
                fontWeight: isActive(item.path) ? '600' : '400'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'white', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          color: '#1a1a1a'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0 } }}>
            {/* Logo pour mobile */}
            {isMobile && (
              <Box sx={{ 
                width: 40, 
                height: 40, 
                backgroundColor: '#ff6b35',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                mr: 2
              }}>
                GC
              </Box>
            )}

            {/* Bouton menu mobile */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>

            {/* Navigation desktop */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              flexGrow: 1,
              justifyContent: 'center'
            }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    mx: 1,
                    color: isActive(item.path) ? '#ff6b35' : '#1a1a1a',
                    fontWeight: isActive(item.path) ? '600' : '400',
                    '&:hover': { 
                      backgroundColor: '#fff3e0',
                      color: '#ff6b35'
                    },
                    px: 3,
                    py: 1.5,
                    borderRadius: 2
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Bouton d'action */}
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#ff6b35',
                '&:hover': { backgroundColor: '#e55a2b' },
                px: 3,
                py: 1.5,
                borderRadius: 2,
                fontWeight: '600',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Réserver
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;