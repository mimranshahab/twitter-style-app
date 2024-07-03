import React, { useEffect, useState } from 'react';
import { fetchTweets } from '../services/api';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await fetchTweets();
      setTweets(response.data);
    };
    getTweets();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <TweetForm setTweets={setTweets} />
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Recent Tweets
          </Typography>
          <TweetList tweets={tweets} />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
