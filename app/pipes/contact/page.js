// src/app/contact/page.js
'use client';
import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Alert,
  alpha,
  useTheme,
  InputAdornment
} from '@mui/material';
import {
  Person,
  Phone,
  Email,
  Business,
  Send,
  LocationOn,
  AccessTime
} from '@mui/icons-material';
import { marbles, pipes } from '@/data/products';

export default function ContactPage() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    product: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Combine marble and pipe products for dropdown
  const allProducts = [
    { category: 'Marbles', products: marbles },
    { category: 'Pipes', products: pipes }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.product) {
      newErrors.product = 'Please select a product';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        product: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F8FAFC 100%)'
          : 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #1A2E05 100%)',
        py: { xs: 3, md: 4 },
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 1 }}>
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
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 1,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="text.secondary"
              sx={{ mb: 1, maxWidth: '600px', margin: '0 auto' }}
            >
              Ready to start your project? Contact us for quotes, samples, and expert advice.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item size={{xs:12, md:8}}>
            <Card 
              sx={{ 
                borderRadius: 3,
                boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: theme.palette.primary.main
                  }}
                >
                  Send us a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </Typography>

                {submitSuccess && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    {/* Name Field */}
                    <Grid item size={{xs:12, sm:6}}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Grid>

                    {/* Mobile Field */}
                    <Grid item size={{xs:12, sm:6}}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                        required
                        placeholder="+1 (555) 123-4567"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Grid>

                    {/* Email Field */}
                    <Grid item size={{xs:12, sm:6}}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Grid>

                    {/* Product Dropdown */}
                    <Grid item size={{xs:12, sm:6}}>
                      <TextField
                        fullWidth
                        select
                        label="Product Interest"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        error={!!errors.product}
                        helperText={errors.product}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Business color="primary" />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      >
                        <MenuItem value="">
                          <em>Select a product</em>
                        </MenuItem>
                        
                        {/* Marbles Section */}
                        <Typography 
                          component="div" 
                          sx={{ 
                            px: 2, 
                            py: 1, 
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            fontSize: '0.875rem'
                          }}
                        >
                          🪨 Marbles
                        </Typography>
                        {marbles.map((marble) => (
                          <MenuItem key={`marble-${marble.id}`} value={`Marble - ${marble.name}`}>
                            {marble.name} ({marble.category})
                          </MenuItem>
                        ))}
                        
                        {/* Pipes Section */}
                        <Typography 
                          component="div" 
                          sx={{ 
                            px: 2, 
                            py: 1, 
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                            mt: 1
                          }}
                        >
                          🔧 Pipes
                        </Typography>
                        {pipes.map((pipe) => (
                          <MenuItem key={`pipe-${pipe.id}`} value={`Pipe - ${pipe.name}`}>
                            {pipe.name} ({pipe.category})
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    {/* Message Field */}
                    <Grid item size={{xs:12}}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, timeline, or any specific questions you have..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          }
                        }}
                      />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item size={{xs:12}} >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? null : <Send />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          borderRadius: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: theme.palette.mode === 'light'
                            ? 'linear-gradient(135deg, #DC2626 0%, #059669 100%)'
                            : 'linear-gradient(135deg, #EF4444 0%, #10B981 100%)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.3)}`,
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item size={{xs:12, md:4}}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              {/* Contact Info Card */}
              <Card 
                sx={{ 
                  mb: 3,
                  background: theme.palette.primary.main,
                  color: 'white',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                    Contact Information
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <LocationOn sx={{ mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 600 }}>
                          Address
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          123 Construction Street<br />
                          Building City, BC 12345
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Phone sx={{ mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 600 }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          +1 (555) 123-4567
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Email sx={{ mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 600 }}>
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          info@marblehub.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <AccessTime sx={{ mt: 0.5, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 600 }}>
                          Business Hours
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          Mon-Fri: 8AM-6PM<br />
                          Sat: 9AM-4PM<br />
                          Sun: Closed
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Quick Response Card */}
              <Card 
                sx={{ 
                  borderRadius: 3,
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  background: alpha(theme.palette.primary.main, 0.03)
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    Quick Response
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We typically respond to all inquiries within 2-4 hours during business days.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}