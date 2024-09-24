import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" style={{ backgroundColor: '#E8EBE0' }}>
      <Toolbar>
        <img 
          src="/logo192.png" 
          alt="Smart Systems" 
          style={{ height: 60, marginRight: 'auto' }} 
        />
        <Button color="inherit" href="#home" style={{ color: 'green' }}>Home</Button>
        <Button color="inherit" href="#path-following" style={{ color: 'green' }}>Path Following</Button>
        <Button color="inherit" href="#plant-counting" style={{ color: 'green' }}>Plant Counting</Button>
        <Button color="inherit" href="#quality-assessment" style={{ color: 'green' }}>Quality Assessment</Button>
        <Button color="inherit" href="#team" style={{ color: 'green' }}>Team</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
