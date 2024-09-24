import React from 'react';
import { Box, Typography } from '@mui/material';

const PathFollowingSection: React.FC = () => {
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
        Path Following
      </Typography>
      <Box
        component="iframe"
        width="80%"
        height="1280px"
        src="https://www.youtube.com/embed/sa3ebk370uU?si=7ZWaTChuQ2ulBRRm"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        sx={{ display: 'block', margin: '0 auto' }}
      ></Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ marginTop: '20px' }}
      >
        FloraBot is capable of autonomously following paths between nursery beds. This innovative solution allows farmers and nursery managers to delegate repetitive tasks to FloraBot, freeing up their time to focus on strategic activities.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ width: '45%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="PathPlanningPic.jpeg"
            alt="Path Planning"
            style={{ width: '100%', height: 'auto' }}
          />
          <Typography variant="caption" display="block" sx={{ marginTop: '5px' }}>
            Path Planning
          </Typography>
        </Box>
        <Box sx={{ width: '45%', margin: '0 10px', textAlign: 'center' }}>
          <img
            src="ZED_PathPlanning.png"
            alt="ZED Path Planning"
            style={{ width: '100%', height: 'auto' }}
          />
          <Typography variant="caption" display="block" sx={{ marginTop: '5px' }}>
            ZED Path Planning
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PathFollowingSection;
