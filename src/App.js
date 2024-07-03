import React from 'react';
import HomePage from './components/HomePage';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      {/* <Typography variant="h3" gutterBottom>
        Twitter-Style App
      </Typography> */}
      <HomePage />
    </Container>
  );
};

export default App;
