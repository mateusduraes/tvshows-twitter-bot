import { users } from './users';
import Twit from 'twit';
import { apiKey } from './key';

const T = new Twit(apiKey);

const stream = T.stream('status/filter', { follow: users } );
stream.on('tweet', (tweet) => {
  console.log('tweet', tweet);
  if (!users.includes(tweet.user.id_str)) return;
  T.post('statuses/retweet/:id', { id: tweet.id_str }, (err, data, response) => {
    console.log('data', data);
  });
});
