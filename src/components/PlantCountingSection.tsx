import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const PlantCountingSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F4ED',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          marginBottom: '30px',
          fontWeight: 'bold',
          color: '#34495E',
        }}
      >
        Plant Counting
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'stretch', // Ensures both boxes stretch to the same height
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Section */}
        <Card
          sx={{
            width: { xs: '100%', md: '45%' },
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '600px', // Set a minimum height to ensure both cards are equal
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginTop: '20px', color: '#2C3E50', fontWeight: 500 }}
            >
              A multi-camera system is deployed to capture panoramic images of the nursery beds using a novel image stitching technique. Plant counts are determined by tallying the masks generated through state-of-the-art instance segmentation algorithms.
            </Typography>
          </CardContent>
          <Box sx={{ padding: '20px' }}>
            <Zoom>
              <CardMedia
                component="img"
                image="Plant_Counting_LongImage_original1_resized.jpg"
                alt="Plant Counting Original 1"
                sx={{ width: '100%', marginBottom: '15px', cursor: 'pointer' }}
              />
            </Zoom>
            <Zoom>
              <CardMedia
                component="img"
                image="Plant_Counting_LongImage_predicted1_resized.jpg"
                alt="Plant Counting Predicted 1"
                sx={{ width: '100%', marginBottom: '15px', cursor: 'pointer' }}
              />
            </Zoom>
            <Zoom>
              <CardMedia
                component="img"
                image="Plant_Counting_LongImage_original2_resized.jpg"
                alt="Plant Counting Original 2"
                sx={{ width: '100%', marginBottom: '15px', cursor: 'pointer' }}
              />
            </Zoom>
            <Zoom>
              <CardMedia
                component="img"
                image="Plant_Counting_LongImage_predicted2_resized.jpg"
                alt="Plant Counting Predicted 2"
                sx={{ width: '100%', cursor: 'pointer' }}
              />
            </Zoom>
          </Box>
        </Card>

        {/* Right Section */}
        <Card
          sx={{
            width: { xs: '100%', md: '45%' },
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '600px', // Set the same minimum height as the left box
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ marginTop: '20px', color: '#2C3E50', fontWeight: 500 }}
            >
              Real-time plant counting system was also assessed.
            </Typography>

            <Box
              component="iframe"
              width="95%"
              height="500px"
              src="https://www.youtube.com/embed/sa3ebk370uU?si=7ZWaTChuQ2ulBRRm"
              title="Real time plant counting"
              frameBorder="0"
              allowFullScreen
              sx={{
                borderRadius: '8px',
                marginBottom: '15px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            ></Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PlantCountingSection;
