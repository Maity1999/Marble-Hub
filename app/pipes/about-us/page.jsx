// src/app/about/page.js
'use client';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Avatar,
  alpha,
  useTheme
} from '@mui/material';
import { 
  Business, 
  LocationOn, 
  Phone, 
  Email, 
  Groups, 
  EmojiEvents, 
  Security,
  Nature,
  Speed,
  Support
} from '@mui/icons-material';

export default function AboutPage() {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      experience: "15+ years in construction materials",
      avatar: "JS",
      color: "#DC2626"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Marble Division",
      experience: "12+ years in natural stones",
      avatar: "SJ",
      color: "#059669"
    },
    {
      name: "Mike Chen",
      role: "Pipe Technology Expert",
      experience: "10+ years in plumbing solutions",
      avatar: "MC",
      color: "#3B82F6"
    },
    {
      name: "Emily Davis",
      role: "Customer Relations",
      experience: "8+ years in client service",
      avatar: "ED",
      color: "#7C3AED"
    }
  ];

  const values = [
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure durability and performance."
    },
    {
      icon: <Nature sx={{ fontSize: 40 }} />,
      title: "Sustainability",
      description: "We source materials responsibly and promote eco-friendly practices in our operations."
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: "Efficiency",
      description: "Streamlined processes ensure timely delivery and competitive pricing for our clients."
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: "Expert Support",
      description: "Our team provides technical guidance and after-sales support for all projects."
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Started as a small marble supplier" },
    { year: "2013", event: "Pipe Division Added", description: "Expanded into plumbing solutions" },
    { year: "2016", event: "International Reach", description: "Started exporting to 5+ countries" },
    { year: "2020", event: "Premium Collection", description: "Launched luxury marble line" },
    { year: "2023", event: "Tech Innovation", description: "Integrated advanced pipe technology" }
  ];

  return (
    
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F8FAFC 100%)'
          : 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1A2E05 100%)',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #DC2626 0%, #059669 50%, #7C3AED 100%)'
                    : 'linear-gradient(135deg, #EF4444 0%, #10B981 50%, #A78BFA 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  mb: 2,
                  lineHeight: 1.1
                }}
              >
                Building Excellence Since 2010
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                color="text.secondary"
                sx={{ 
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Your trusted partner for premium marbles and quality pipes. 
                We combine traditional craftsmanship with modern technology 
                to deliver exceptional materials for your projects.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<Groups />} 
                  label="50+ Team Members" 
                  variant="outlined"
                  sx={{ borderColor: theme.palette.primary.main }}
                />
                <Chip 
                  icon={<EmojiEvents />} 
                  label="1000+ Projects" 
                  variant="outlined"
                  sx={{ borderColor: theme.palette.primary.main }}
                />
                <Chip 
                  icon={<LocationOn />} 
                  label="Global Supply" 
                  variant="outlined"
                  sx={{ borderColor: theme.palette.primary.main }}
                />
              </Box>
            </Grid>
            
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 400 },
                  background: theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #DC2626 0%, #059669 50%, #7C3AED 100%)'
                    : 'linear-gradient(135deg, #EF4444 0%, #10B981 50%, #A78BFA 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative'
                }}
              >
                <Business sx={{ fontSize: 80, opacity: 0.8 }} />
                <Typography
                  variant="h4"
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    fontWeight: 700,
                    opacity: 0.9
                  }}
                >
                  Marble Hub
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Founded in 2010, Marble Hub began as a small family business with a passion for 
              natural stones. What started as a local marble supplier has grown into a 
              comprehensive construction materials provider, serving clients across the globe.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
              Our journey expanded in 2013 when we recognized the need for quality plumbing 
              solutions to complement our marble offerings. Today, we proudly serve architects, 
              contractors, and homeowners with both exquisite natural stones and reliable pipe systems.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              We believe in building lasting relationships through quality products, 
              expert guidance, and unwavering commitment to customer satisfaction.
            </Typography>
          </Grid>
          
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              {/* Milestones Timeline */}
              <Box sx={{ pl: 3, borderLeft: `3px solid ${theme.palette.primary.main}` }}>
                {milestones.map((milestone, index) => (
                  <Box key={index} sx={{ mb: 4, position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        left: -10,
                        top: 0,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        border: `3px solid ${theme.palette.background.default}`
                      }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {milestone.event}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {milestone.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values Section */}
      <Box sx={{ 
        background: alpha(theme.palette.primary.main, 0.03),
        py: { xs: 6, md: 10 }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Our Values
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, margin: '0 auto' }}>
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item size={{ xs: 12, sm:6, md: 3 }} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 2
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    

      {/* Contact Info Section */}

    </Box>
  );
}