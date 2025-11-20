// src/app/page.js
'use client';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeroSection from '@/components/ui/HeroSection';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      width: '100vw',
      height: '100vh',
      maxHeight: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden', // This prevents scrolling on the container
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F8FAFC 100%)'
        : 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1A2E05 100%)'
    }}>
      <Box sx={{
        height: '100%',
        width: '100%',
        overflow: 'hidden' // Also prevent overflow on inner container
      }}>
        <HeroSection/>
      </Box>
    </Box>
  );
}