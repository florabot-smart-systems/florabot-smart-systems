import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { LinkedIn as LinkedInIcon, Language as LanguageIcon, School as SchoolIcon } from '@mui/icons-material';

const TeamSection: React.FC = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      p={3}
      sx={{ backgroundColor: '#E8EBE0'}}
    >
      <Typography variant="h3" gutterBottom align="center">
        Meet the Team
      </Typography>
      <Box 
        display="flex" 
        flexWrap="wrap" 
        justifyContent="center" 
        alignItems="center"
      >
        {/* Team Member 1 */}
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Hamid.jpeg" 
            alt="Hamid" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Hamid Habib Syed</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ marginLeft: '4px' }}>hhs0015@auburn.edu</Typography>
          </Box>
          <Box>
            <Link href="https://hamidsyed298.github.io/" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/hamid-habib-syed-74004815a/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>

        {/* Team Member 2 */}
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Faraz.jpeg" 
            alt="Faraz" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Faraz Ahmed</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ marginLeft: '4px' }}>fza0070@auburn.edu</Typography>
          </Box>
          <Box>
            <Link href="" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mfaraz-ahmad/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>

        {/* Team Member 3 */}
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Maruf.jpeg" 
            alt="Maruf" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Mesbahul Maruf</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ marginLeft: '4px' }}>mzm0411@auburn.edu</Typography>
          </Box>
          <Box>
            <Link href="" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mesbah-maruf/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>

        {/* Team Member 4 */}
        <Box 
          width="25%" 
          p={2} 
          textAlign="center"
        >
          <img 
            src="/Mohtasim.png" 
            alt="Mohtasim" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover',
              borderRadius: '50%'
            }} 
          />
          <Typography variant="body1">Mohtasim Hadi Rafi</Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ marginLeft: '4px' }}>mzr0167@auburn.edu</Typography>
          </Box>
          <Box>
            <Link href="https://scholar.google.com/citations?user=ih7NQy8AAAAJ&hl=en&oi=ao" target="_blank" style={{ marginRight: '8px' }}>
              <SchoolIcon />
            </Link>
            <Link href="https://moho.blog" target="_blank" style={{ marginRight: '8px' }}>
              <LanguageIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/mohtasimhadi/" target="_blank">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;
