// src/components/common/Header/Header.js
'use client';
import { AppBar, Toolbar, Typography, IconButton, Box, useTheme, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '@/lib/ThemeRegistry';
import Link from 'next/link';

export default function Header() {
  const { toggleTheme, isDark } = useThemeContext();
  const theme = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, #DC2626 0%, #7C3AED 100%)'
          : 'linear-gradient(135deg, #EF4444 0%, #8B5CF6 100%)',
        borderBottom: `3px solid ${theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5'}`,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between', 
        py: { xs: 1, sm: 1.5, md: 2 },
        px: { xs: 1, sm: 2, md: 3 }
      }}>
        {/* Logo and Company Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <Link href="/marbles"
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
          <Box
            sx={{
              width: { xs: 40, sm: 45, md: 50 },
              height: { xs: 40, sm: 45, md: 50 },
              borderRadius: '12px',
              background: theme.palette.mode === 'light' 
                ? 'linear-gradient(135deg, #FFFFFF 0%, #FECACA 100%)'
                : 'linear-gradient(135deg, #FECACA 0%, #FCA5A5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.mode === 'light' ? '#DC2626' : '#EF4444',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              mr: 1,
            }}
          >
            MH
          </Box>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              display: { xs: 'none', sm: 'block' },
              fontSize: { sm: '1.5rem', md: '1.75rem', lg: '2rem' }
            }}
          >
            Marble Hub
          </Typography>
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2, md: 3 },
          mr: { xs: 1, sm: 2, md: 3 }
        }}>
          <Button
            component={Link}
            href="/marbles/about-us"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              textTransform: 'none',
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent',
                transform: 'translateY(-2px)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)',
              },
              '&:hover::after': {
                width: '100%',
              },
              transition: 'all 0.3s ease',
              padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' },
              borderRadius: '8px',
            }}
          >
            About Us
          </Button>

          <Button
            component={Link}
            href="/marbles/contact"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              textTransform: 'none',
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent',
                transform: 'translateY(-2px)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)',
              },
              '&:hover::after': {
                width: '100%',
              },
              transition: 'all 0.3s ease',
              padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' },
              borderRadius: '8px',
            }}>
            Contact Us
          </Button>
        </Box>

        {/* Theme Toggle */}
        <IconButton
          onClick={toggleTheme}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: { xs: 40, sm: 44, md: 48 },
            height: { xs: 40, sm: 44, md: 48 },
          }}
        >
          {isDark ? 
            <Brightness7 sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} /> : 
            <Brightness4 sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }} />
          }
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}