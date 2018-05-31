import { likeTweet, retweet } from './twitter-functions';
import { T } from './twitter-app';

async function getFriendsIds() {
  try {
    const result = await T.get('friends/ids');
    return result.data.ids;
  } catch (e) {
    console.log('error', e);
  }
};

async function init() {
  const ids = await getFriendsIds();
  const stream = T.stream('statuses/filter', { follow: ids });
  stream.on('tweet', (tweet) => {
    console.log('tweet received');
    if (!ids.includes(tweet.user.id)) return;
    console.log('Friend:', tweet.user.name);
    console.log('Tweet: ', tweet.text);
    likeTweet(tweet.id_str);
    retweet(tweet.id_str);
  });
}

init();