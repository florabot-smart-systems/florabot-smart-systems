import React from 'react';
import { Box, Typography } from '@mui/material';

const PlantCountingSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E8EBE0',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ marginBottom: '20px' }}
      >
        Plant Counting
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: '20px' }}
      >
        A multi-camera system is deployed to capture panoramic images of the nursery beds using a novel image stitching technique. Plant counts are then determined by tallying the masks generated through state-of-the-art instance segmentation algorithms. 
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: '22%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="Plant_Counting_LongImage_original1_resized.jpg"
            alt="Path Planning"
            style={{ width: '100%'}}
          />  
        </Box>
        <Box sx={{ width: '22%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="Plant_Counting_LongImage_predicted1_resized.jpg"
            alt="Path Planning"
            style={{ width: '100%'}}
          />  
        </Box>
        <Box sx={{ width: '22%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="Plant_Counting_LongImage_original2_resized.jpg"
            alt="Path Planning"
            style={{ width: '100%'}}
          />  
        </Box>
        <Box sx={{ width: '22%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="Plant_Counting_LongImage_predicted2_resized.jpg"
            alt="Path Planning"
            style={{ width: '100%'}}
          />  
        </Box>
      </Box>
    </Box>
  );
};

export default PlantCountingSection;
