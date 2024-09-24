import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      justifyContent="space-between" 
      alignItems="flex-start" 
      padding={3} 
      sx={{ 
        backgroundColor: '#f5f5f5', 
        color: '#333', 
        boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
      }}
    >
      {/* First Column: Logo */}
      <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} mb={{ xs: 4, md: 0 }} flexBasis={{ xs: '100%', md: '30%' }}>
        <Box mb={1}>
          <img 
            src="/logo192.png" 
            alt="Smart Systems Lab Logo" 
            style={{ width: '100%', maxWidth: '150px', borderRadius: '8px' }} 
          />
        </Box>
        <Typography variant="body2" gutterBottom>
          <Link 
            href="https://www.auburn.edu/" 
            target="_blank" 
            rel="noopener" 
            sx={{ color: '#1976d2', textDecoration: 'none' }}
          >
            Auburn University
          </Link>
          {' | '}
          <Link 
            href="https://agriculture.auburn.edu/about/departments/biosystems-engineering/" 
            target="_blank" 
            rel="noopener" 
            sx={{ color: '#1976d2', textDecoration: 'none' }}
          >
            Department of Biosystems Engineering
          </Link>
        </Typography>
        <Typography variant="body2">
          Dedicated to advancing smart technologies for sustainable solutions.
        </Typography>
      </Box>

      {/* Middle Column: Information */}
      <Box display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }} mb={{ xs: 2, md: 0 }} flexBasis={{ xs: '100%', md: '40%' }}>
        <Typography variant="h6" gutterBottom>Smart Systems Lab</Typography>
        <Typography variant="body2" gutterBottom>
          © 2024 Auburn University
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOnIcon fontSize="small" />
          <Link 
            href="https://goo.gl/maps/7XQ9ZT3HyRoWph1A6" 
            target="_blank" 
            rel="noopener" 
            sx={{ marginLeft: '4px', color: '#1976d2', textDecoration: 'none' }}
          >
            Corley Building, Auburn University
          </Link>
        </Box>
      </Box>

      {/* Third Column: Google Map */}
      <Box 
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.781699646192!2d-85.4841919233418!3d32.60252769482567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cf56b56ae0025%3A0x48e5271e7d93478b!2sCorley%20Building%2C%20Auburn%2C%20AL%2036830%2C%20USA!5e0!3m2!1sen!2sin!4v1625810192890!5m2!1sen!2sin"
        width="85%" 
        height="100" 
        allowFullScreen={false}
        loading="lazy"
        sx={{ 
          border: 'none', 
          borderRadius: '8px', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: { xs: '100%', md: '300px' },
          mt: { xs: 2, md: 0 },
          flexBasis: { xs: '100%', md: '30%' }
        }}
      />
    </Box>
  );
};

export default Footer;
