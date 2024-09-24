import React from 'react';
import { Box, Typography } from '@mui/material';

const QualityAssessmentSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#white',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Quality Assessment
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: '20px' }}
      >
        Morphological parameters are quantified to determine the area, perimeter, eccentricity, and circularity of individual ornamental plants. 
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: '80%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="QualityAssessmentCombined.png"
            alt="Path Planning"
            style={{ width: '70%', height: 'auto' }}
          />          
        </Box>
        <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: '20px' }}
      >
        The distribution of these morphological parameters across nursery plant beds is used for growth estimation, stress and disease analysis, monitoring plant elongation, identifying outliers, and assessing the aesthetic value of ornamental plants, which directly impacts their market share. 
      </Typography>
      <Box sx={{ width: '85%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="Plots_Combined.png"
            alt="Path Planning"
            style={{ width: '100%'}}
          />
          
        </Box>
      </Box>
    </Box>
  );
};

export default QualityAssessmentSection;
