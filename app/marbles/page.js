// src/app/marbles/page.js
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
import { marbles } from '@/data/marbleData';

export default function MarblesPage() {
  const [selectedMarble, setSelectedMarble] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const theme = useTheme();

  const filteredMarbles = selectedCategory === 'all' 
    ? marbles 
    : marbles.filter(marble => {
        if (selectedCategory === 'white') return marble.category.includes('White');
        if (selectedCategory === 'colored') return marble.category.includes('Brown') || marble.category.includes('Green');
        if (selectedCategory === 'black') return marble.category.includes('Black');
        if (selectedCategory === 'luxury') return marble.category.includes('Luxury') || marble.category.includes('Premium');
        return true;
      });

  const handleCardClick = (marble) => {
    setSelectedMarble(marble);
    scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedMarble(null);
  };

  if (selectedMarble) {
    return (
      <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Back Button */}
          <Button
            startIcon={<ArrowBack />}
            onClick={() => {
              handleBackClick();
            }}

            sx={{ mb: 3, color: theme.palette.primary.main }}
          >
            Back to Marbles
          </Button>

          {/* Detailed View */}
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item size={{xs:12, sm:6}}>
              <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={selectedMarble.image}
                  alt={selectedMarble.name}
                  sx={{ objectFit: 'cover' }}
                  
                />
              </Card>
            </Grid>

            {/* Details Section */}
            <Grid item size={{xs:12, sm:6}}>
              <Box sx={{ mb: 3 }}>
                <Chip 
                  label={selectedMarble.category} 
                  sx={{ 
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    mb: 2
                  }}
                />
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                  {selectedMarble.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {selectedMarble.origin}
                </Typography>
                
                {/* Price Range */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                    {selectedMarble.priceRange.replace(/\$/g, '★')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({selectedMarble.priceRange.length} out of 4)
                  </Typography>
                </Box>

                {/* Description */}
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                  {selectedMarble.description}
                </Typography>

                {/* Features */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Key Features
                  </Typography>
                  <Grid container spacing={1}>
                    {selectedMarble.features.map((feature, index) => (
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
                    {selectedMarble.applications.map((app, index) => (
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

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button                    
                    href="/marbles/contact" 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      backgroundColor: theme.palette.primary.main,
                      px: 4
                    }}
                  >
                    Contact Us
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
          ? 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)'
          : 'linear-gradient(135deg, #0F172A 0%, #1A2E05 100%)',
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
                  ? 'linear-gradient(135deg, #DC2626 0%, #059669 100%)'
                  : 'linear-gradient(135deg, #EF4444 0%, #10B981 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
              }}
            >
              Premium Marbles
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', margin: '0 auto' }}
            >
              Discover our exquisite collection of natural stones from around the world
            </Typography>
          </Box>

          {/* Category Filters */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            {[
              { id: 'all', name: 'All Marbles', count: marbles.length },
              { id: 'white', name: 'White Marbles', count: 4 },
              { id: 'colored', name: 'Colored Marbles', count: 3 },
              { id: 'black', name: 'Black Marbles', count: 1 },
              { id: 'luxury', name: 'Luxury Marbles', count: 2 },
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
          {filteredMarbles.map((marble) => (
            <Grid item size={{xs:12, sm:6, md:4}} key={marble.id}>
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
                onClick={() => handleCardClick(marble)}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={marble.image}
                  alt={marble.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flex: 1 }}>
                      {marble.name}
                    </Typography>
                    <Chip 
                      label={marble.priceRange} 
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
                    {marble.description.slice(0, 100)}...
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      {marble.origin}
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
                    {marble.features.slice(0, 2).map((feature, index) => (
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
        {filteredMarbles.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No marbles found in this category.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}