import * as twitter from './twitter-functions';
import { T } from './twitter-app';

async function init() {
  const ids = await twitter.getFriendsIds();
  const stream = T.stream('statuses/filter', { follow: ids });
  stream.on('tweet', (tweet) => {
    if (!ids.includes(tweet.user.id)) return;
    twitter.likeTweet(tweet.id_str);
    twitter.retweet(tweet.id_str);
  });
}

init();