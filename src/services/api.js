import axios from 'axios';

const API_URL = 'https://localhost:7157/api'; // Update with your API base URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Include credentials
});

export const fetchTweets = () => api.get('/tweets');
export const postTweet = async (_email, _password, _message) => {
  try {
    const payload = {
      tweetId: 62699,
      message: _message,
      postedDate: "2024-06-21T07:44:28.720Z",
      memberId: 1,
      member: {
          memberId: 5,
          email: _email,
          password: _password,
          createdAt: "2024-06-21T07:44:28.720Z"
        }
    };
    console.log("payload", payload)
    const response = await api.post('/tweets', payload);
    return response.data;
  } catch (error) {
    console.error('Error posting tweet:', error.response.data);
    throw error;
  }
};


  