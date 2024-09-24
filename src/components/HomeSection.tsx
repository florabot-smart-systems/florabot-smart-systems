import React from 'react';
import { Box, Typography } from '@mui/material';

const HomeSection: React.FC = () => {
  return (
    <Box className="home-section">
      <Box className="overlay">
        <Typography variant="h2" color="white" align="center" gutterBottom>
          An automated unmanned path following ground robot for plant counting and quality assessment
        </Typography>
        <Typography variant="h5" color="white" align="center">
          Ornamental Nursery has hundreds of thousands of plants in a single nursery, and in a single nursery, hundreds of different varieties of plants can be found. It is difficult to manage these ornamental plants and keep track of them. Their count is essential, especially in the selling season, and their quality has to be estimated sidewise continuously. Moreover, the impending labor shortage and higher wages, ultimately lead to higher plant prices and that, in turn, impacts the market.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeSection;
