// src/components/layout/Footer/Footer.js
'use client';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton, 
  useTheme 
} from '@mui/material';
import { 
  Facebook, 
  Instagram, 
  LinkedIn,
  Phone,
  Email,
  WhatsApp 
} from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #DC2626 0%, #7C3AED 100%)'
          : 'linear-gradient(135deg, #EF4444 0%, #8B5CF6 100%)',
        color: 'white',
        pt: { xs: 3, sm: 4, md: 4 },
        pb: { xs: 2, sm: 3, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 3, sm: 3, md: 3 }}>
          {/* Company Info */}
          <Grid item size={{ xs:12, md:6}}>
            <Box sx={{ mb: { xs: 2, sm: 2, md: 2 } }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #FECACA 0%, #DDD6FE 100%)'
                    : 'linear-gradient(135deg, #FCA5A5 0%, #C4B5FD 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 1,
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.75rem' }
                }}
              >
                Marble Hub
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                mb: { xs: 1.5, md: 2 }, 
                lineHeight: 1.5,
                fontSize: { xs: '0.8rem', sm: '0.875rem' }
              }}>
                Your trusted partner for premium marbles and quality pipes.
              </Typography>
              
              {/* Contact Info - Responsive */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.8, sm: 1 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ 
                    color: theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5', 
                    fontSize: { xs: 16, sm: 18 } 
                  }} />
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: { xs: '0.75rem', sm: '0.875rem' } 
                  }}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ 
                    color: theme.palette.mode === 'light' ? '#DDD6FE' : '#C4B5FD', 
                    fontSize: { xs: 16, sm: 18 } 
                  }} />
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    fontSize: { xs: '0.75rem', sm: '0.875rem' } 
                  }}>
                    info@marblehub.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Services & Social */}
          <Grid item size={{ xs:12, md:6}}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'row', sm: 'row', md: 'row' },
              justifyContent: { xs: 'space-between', sm: 'space-between', md: 'space-between' },
              gap: { xs: 2, sm: 3, md: 4 },
              flexWrap: { xs: 'nowrap', sm: 'nowrap', md: 'nowrap' },
              overflowX: { xs: 'auto', sm: 'visible' },
              pb: { xs: 1, sm: 0 }
            }}>
              {/* Services */}
              <Box sx={{ 
                flex: '0 0 auto',
                minWidth: { xs: '100px', sm: '120px', md: '140px' },
                mr: { xs: 2, sm: 0 }
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: { xs: 1, sm: 2 },
                    color: theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.3, sm: 0.5, md: 1 } }}>
                  {['Installation', 'Custom Cutting', 'Maintenance', 'Consultation'].map((item) => (
                    <span
                      key={item}
                      style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5';
                        e.target.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.transform = 'translateX(0px)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </Box>
              </Box>

              {/* Connect */}
              <Box sx={{ 
                flex: '0 0 auto',
                minWidth: { xs: '100px', sm: '120px', md: '140px' },
                mr: { xs: 2, sm: 0 }
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: { xs: 1, sm: 2 },
                    color: theme.palette.mode === 'light' ? '#DDD6FE' : '#C4B5FD',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Connect
                </Typography>
                
                {/* Social Media - Responsive */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 0.3, sm: 0.5 }, 
                  mb: { xs: 1, sm: 2 },
                  flexWrap: 'wrap',
                }}>
                  {[
                    { icon: <Facebook sx={{ fontSize: { xs: 18, sm: 20 } }} />, color: '#1877F2', name: 'Facebook' },
                    { icon: <WhatsApp sx={{ fontSize: { xs: 18, sm: 20 } }} />, color: '#25D366', name: 'WhatsApp' },
                  ].map((social) => (
                    <IconButton
                      key={social.name}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        padding: { xs: '3px', sm: '6px' },
                        '&:hover': {
                          backgroundColor: social.color,
                          transform: 'scale(1.15)',
                        },
                        transition: 'all 0.2s ease',
                        width: { xs: 28, sm: 36 },
                        height: { xs: 28, sm: 36 },
                      }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              {/* Business Hours */}
              <Box sx={{ 
                flex: '0 0 auto',
                minWidth: { xs: '100px', sm: '120px', md: '140px' }
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: { xs: 1, sm: 2 },
                    color: theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  Hours
                </Typography>
                <Box>
                  <Typography variant="caption" sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    display: 'block',
                    fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap'
                  }}>
                    Mon-Fri: 8AM-6PM
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    display: 'block',
                    fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap'
                  }}>
                    Sat: 9AM-4PM
                  </Typography>
                  <Typography variant="caption" sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    display: 'block',
                    fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' },
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap'
                  }}>
                    Sun: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: { xs: 1.5, sm: 2 },
          textAlign: { xs: 'center', sm: 'left' },
          mt: { xs: 3, sm: 4 },
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          pt: { xs: 2, sm: 3 }
        }}>
          <Typography variant="caption" sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: { xs: '0.7rem', sm: '0.75rem' }
          }}>
            © {currentYear} Marble Hub. All rights reserved.
          </Typography>
          
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 2, sm: 3 },
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'flex-end' }
          }}>
            {['Privacy Policy', 'About Us'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: theme.palette.mode === 'light' ? '#FECACA' : '#FCA5A5',
                  },
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}