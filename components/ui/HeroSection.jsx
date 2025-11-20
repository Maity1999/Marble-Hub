// src/components/ui/HeroSection.js
'use client';
import { Box, Grid, Card, CardContent, Typography, alpha } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

// Import your actual images
import marbleBg from '@/public/images/marbles/marble1.jpg';
import pipeBg from '@/public/images/pipes/pipe2.jpg';

export default function HeroSection() {
  const router = useRouter();
  const theme = useTheme();

  const handleMarbleClick = () => {
    router.push('/marbles');
  };

  const handlePipeClick = () => {
    router.push('/pipes');
  };

  return (
    <Box sx={{ 
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <Grid container sx={{ 
        height: '100vh',
        margin: 0,
        width: '100vw'
      }}>
        {/* Marble Section - 50% Height on mobile, 50% Width on desktop */}
        <Grid item size={{xs:12, md:6}} sx={{ 
          height: { xs: '50vh', md: '100vh' },
          padding: 0,
          margin: 0
        }}>
          <Card
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
              borderRadius: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              margin: 0,
              padding: 0,
              '&:hover': {
                '& .content': {
                  transform: 'translateY(-8px)',
                },
                '& .image-overlay': {
                  opacity: 1,
                },
                boxShadow: `0 20px 40px ${alpha(theme.palette.mode === 'light' ? '#DC2626' : '#EF4444', 0.3)}`,
              },
              transition: 'all 0.4s ease-in-out',
            }}
            onClick={handleMarbleClick}
          >
            
            {/* Actual Image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
              }}
            >
              <Image
                src={marbleBg}
                alt="Marble Background"
                fill
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
                priority
              />
            </Box>


            {/* Content */}
            <CardContent className="content" sx={{ 
              textAlign: 'center', 
              zIndex: 3,
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.4s ease-in-out',
              p: { xs: 2, sm: 3 },
              margin: 0
            }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: { xs: 1, md: 3 },
                  fontSize: { 
                    xs: '2rem', 
                    sm: '3rem', 
                    md: '4rem',
                    lg: '4.5rem' 
                  },
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                Marbles
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  opacity: 0.9,
                  fontWeight: 500,
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.3rem', 
                    md: '1.5rem' 
                  },
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  maxWidth: '300px',
                  margin: '0 auto',
                  mb: { xs: 2, md: 4 }
                }}
              >
                Exquisite Natural Stone Collection
              </Typography>

              {/* Feature Tags */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 0.5, 
                flexWrap: 'wrap',
                maxWidth: '100%'
              }}>
                {['Carrara', 'Calacatta', 'Statuario'].map((type) => (
                  <Box
                    key={type}
                    sx={{
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.3, sm: 0.5 },
                      backgroundColor: alpha('#ffffff', 0.2),
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha('#ffffff', 0.3)}`,
                    }}
                  >
                    <Typography variant="caption" sx={{ 
                      color: 'white', 
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.8rem' }
                    }}>
                      {type}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pipe Section - 50% Height on mobile, 50% Width on desktop */}
        <Grid item size={{xs:12, md:6}} sx={{ 
          height: { xs: '50vh', md: '100vh' },
          padding: 0,
          margin: 0
        }}>
          <Card
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
              borderRadius: 0,
              cursor: 'pointer',
              overflow: 'hidden',
              margin: 0,
              padding: 0,
              '&:hover': {
                '& .content': {
                  transform: 'translateY(-8px)',
                },
                '& .image-overlay': {
                  opacity: 1,
                },
                boxShadow: `0 20px 40px ${alpha(theme.palette.mode === 'light' ? '#059669' : '#10B981', 0.3)}`,
              },
              transition: 'all 0.4s ease-in-out',
            }}
            onClick={handlePipeClick}
          >
            
            {/* Actual Image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
              }}
            >
              <Image
                src={pipeBg}
                alt="Pipe Background"
                fill
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
                priority
              />
            </Box>

            {/* Content */}
            <CardContent className="content" sx={{ 
              textAlign: 'center', 
              zIndex: 3,
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.4s ease-in-out',
              p: { xs: 2, sm: 3 },
              margin: 0
            }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: { xs: 1, md: 3 },
                  fontSize: { 
                    xs: '2rem', 
                    sm: '3rem', 
                    md: '4rem',
                    lg: '4.5rem' 
                  },
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                Pipes
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  opacity: 0.9,
                  fontWeight: 500,
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.3rem', 
                    md: '1.5rem' 
                  },
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                  maxWidth: '300px',
                  margin: '0 auto',
                  mb: { xs: 2, md: 4 }
                }}
              >
                Quality Plumbing Solutions
              </Typography>

              {/* Feature Tags */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 0.5, 
                flexWrap: 'wrap',
                maxWidth: '100%'
              }}>
                {['PVC', 'Copper', 'HDPE'].map((type) => (
                  <Box
                    key={type}
                    sx={{
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.3, sm: 0.5 },
                      backgroundColor: alpha('#ffffff', 0.2),
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha('#ffffff', 0.3)}`,
                    }}
                  >
                    <Typography variant="caption" sx={{ 
                      color: 'white', 
                      fontWeight: 600,
                      fontSize: { xs: '0.7rem', sm: '0.8rem' }
                    }}>
                      {type}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}