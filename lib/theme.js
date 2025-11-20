// src/lib/theme/theme.js
import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1.1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
};

// Light theme
export const theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3A8A', // Deep Blue for Header
      light: '#3B82F6',
      dark: '#1E40AF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#DC2626', // Red for accents
      light: '#EF4444',
      dark: '#B91C1C',
    },
    marble: {
      main: '#059669', // Emerald Green for Marble section
      light: '#10B981',
      dark: '#047857',
      background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
      text: '#065F46',
    },
    pipe: {
      main: '#7C3AED', // Purple for Pipe section
      light: '#8B5CF6',
      dark: '#6D28D9',
      background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
      text: '#5B21B6',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3730A3', // Indigo for Header
      light: '#4F46E5',
      dark: '#312E81',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
    },
    marble: {
      main: '#10B981', // Emerald Green for Marble section
      light: '#34D399',
      dark: '#059669',
      background: 'linear-gradient(135deg, #064E3B 0%, #047857 100%)',
      text: '#A7F3D0',
    },
    pipe: {
      main: '#8B5CF6', // Purple for Pipe section
      light: '#A78BFA',
      dark: '#7C3AED',
      background: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 100%)',
      text: '#DDD6FE',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#94A3B8',
    },
  },
});