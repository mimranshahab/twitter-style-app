import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Card, CardContent, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TweetList = ({ tweets }) => {
  return (
    <List>
      {tweets.map((tweet) => (
        <Card key={tweet.tweetId} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="body1">{tweet.message}</Typography>}
                secondary={
                  <Typography variant="body2" color="textSecondary">
                    {`Posted by User ID: ${tweet.memberId} on ${new Date(tweet.postedDate).toLocaleString()}`}
                  </Typography>
                }
              />
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default TweetList;
