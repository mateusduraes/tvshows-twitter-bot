import { users } from './users';
import Twit from 'twit';
import { apiKey } from './key';
import { likeTweet, retweet } from './twitter-functions';
import { T } from './twitter-app';

const stream = T.stream('status/filter', { follow: users } );

stream.on('tweet', (tweet) => {
  if (!users.includes(tweet.user.id_str)) return;
  likeTweet(T);
  retweet(T);
});
