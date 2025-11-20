// src/app/pipes/page.js
'use client';
import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip,
  Button,
  alpha,
  useTheme
} from '@mui/material';
import { ArrowBack, LocalShipping, CheckCircle, Link } from '@mui/icons-material';
import { pipes } from '@/data/pipeData';

export default function PipesPage() {
  const [selectedPipe, setSelectedPipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const theme = useTheme();

  const filteredPipes = selectedCategory === 'all' 
    ? pipes 
    : pipes.filter(pipe => {
        if (selectedCategory === 'pvc') return pipe.category.includes('PVC');
        if (selectedCategory === 'metal') return pipe.category.includes('Copper') || pipe.category.includes('GI') || pipe.category.includes('Steel');
        if (selectedCategory === 'specialty') return pipe.category.includes('CPVC') || pipe.category.includes('HDPE') || pipe.category.includes('PPR');
        if (selectedCategory === 'industrial') return pipe.category.includes('Industrial');
        return true;
      });

  const handleCardClick = (pipe) => {
    setSelectedPipe(pipe);
    scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPipe(null);
  };

  if (selectedPipe) {
    return (
      <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Back Button */}
          <Button
            startIcon={<ArrowBack />}
            onClick={handleBackClick}
            sx={{ mb: 3, color: theme.palette.primary.main }}
          >
            Back to Pipes
          </Button>

          {/* Detailed View */}
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item size={{xs:12, sm:6}}>
              <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={selectedPipe.image}
                  alt={selectedPipe.name}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>

            {/* Details Section */}
            <Grid item size={{xs:12, md:6}}>
              <Box sx={{ mb: 3 }}>
                <Chip 
                  label={selectedPipe.category} 
                  sx={{ 
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    mb: 2
                  }}
                />
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  {selectedPipe.name}
                </Typography>
                
                {/* Sizes */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    Available Sizes
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedPipe.sizes.map((size, index) => (
                      <Chip
                        key={index}
                        label={size}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: theme.palette.secondary.main }}
                      />
                    ))}
                  </Box>
                </Box>
                
                {/* Price Range */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                    {selectedPipe.priceRange.replace(/\$/g, '★')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({selectedPipe.priceRange.length} out of 4)
                  </Typography>
                </Box>

                {/* Description */}
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                  {selectedPipe.description}
                </Typography>

                {/* Features */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Key Features
                  </Typography>
                  <Grid container spacing={1}>
                    {selectedPipe.features.map((feature, index) => (
                      <Grid item size={{xs:12, sm:6}} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CheckCircle sx={{ color: theme.palette.success.main, fontSize: 18, mr: 1 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* Applications */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Recommended Applications
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedPipe.applications.map((app, index) => (
                      <Chip
                        key={index}
                        label={app}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: theme.palette.primary.main }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Standards */}
                {selectedPipe.standards && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Quality Standards
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedPipe.standards.map((standard, index) => (
                        <Chip
                          key={index}
                          label={standard}
                          size="small"
                          sx={{ 
                            backgroundColor: theme.palette.info.main,
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    href="/pipes/contact" 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      px: 4
                    }}
                  >
                    Contact us
                  </Button>
                  
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)'
          : 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        py: 4,
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
                  ? 'linear-gradient(135deg, #059669 0%, #3B82F6 100%)'
                  : 'linear-gradient(135deg, #10B981 0%, #60A5FA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
              }}
            >
              Quality Pipes
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', margin: '0 auto' }}
            >
              Premium plumbing solutions for residential, commercial, and industrial applications
            </Typography>
          </Box>

          {/* Category Filters */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            {[
              { id: 'all', name: 'All Pipes', count: pipes.length },
              { id: 'pvc', name: 'PVC Pipes', count: 2 },
              { id: 'metal', name: 'Metal Pipes', count: 3 },
              { id: 'specialty', name: 'Specialty Pipes', count: 3 },
              { id: 'industrial', name: 'Industrial Pipes', count: 2 },
            ].map((category) => (
              <Chip
                key={category.id}
                label={`${category.name} (${category.count})`}
                clickable
                variant={selectedCategory === category.id ? 'filled' : 'outlined'}
                onClick={() => setSelectedCategory(category.id)}
                sx={{
                  backgroundColor: selectedCategory === category.id ? theme.palette.primary.main : 'transparent',
                  color: selectedCategory === category.id ? 'white' : theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: selectedCategory === category.id ? theme.palette.primary.dark : alpha(theme.palette.primary.main, 0.1),
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Products Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {filteredPipes.map((pipe) => (
            <Grid item size={{xs:12, sm:6, md:4}} md={4} key={pipe.id}>
              <Card
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                    borderColor: theme.palette.primary.main,
                  }
                }}
                onClick={() => handleCardClick(pipe)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={pipe.image}
                  alt={pipe.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flex: 1 }}>
                      {pipe.name}
                    </Typography>
                    <Chip 
                      label={pipe.priceRange} 
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                    {pipe.description.slice(0, 100)}...
                  </Typography>

                  {/* Sizes Preview */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      Available Sizes:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {pipe.sizes.slice(0, 3).map((size, index) => (
                        <Chip
                          key={index}
                          label={size}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            fontSize: '0.6rem',
                            borderColor: alpha(theme.palette.secondary.main, 0.5)
                          }}
                        />
                      ))}
                      {pipe.sizes.length > 3 && (
                        <Chip
                          label={`+${pipe.sizes.length - 3}`}
                          size="small"
                          sx={{ 
                            fontSize: '0.6rem',
                            backgroundColor: alpha(theme.palette.secondary.main, 0.1)
                          }}
                        />
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {pipe.category}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocalShipping sx={{ fontSize: 16, color: theme.palette.success.main, mr: 0.5 }} />
                      <Typography variant="caption" color="text.secondary">
                        In Stock
                      </Typography>
                    </Box>
                  </Box>

                  {/* Features Preview */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {pipe.features.slice(0, 2).map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          fontSize: '0.7rem',
                          borderColor: alpha(theme.palette.primary.main, 0.3)
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredPipes.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No pipes found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}