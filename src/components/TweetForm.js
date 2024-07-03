import React, { useState } from 'react';
import { postTweet } from '../services/api';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const TweetForm = ({ setTweets }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const newTweet = await postTweet(email, password, message);
      setTweets((prevTweets) => [newTweet, ...prevTweets]);
      setEmail('');
      setPassword('');
      setMessage('');
    } catch (error) {
      setError(error.response.data.message || 'Error posting tweet');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <TwitterIcon color="primary" style={{ fontSize: 40, marginRight: 8 }} />
        <Typography variant="h4">Post a Tweet</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2, width: '100%' }, '& .MuiButton-root': { mt: 2 } }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          inputProps={{ maxLength: 140 }}
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Post Tweet
        </Button>
      </Box>
    </Container>
  );
};

export default TweetForm;
