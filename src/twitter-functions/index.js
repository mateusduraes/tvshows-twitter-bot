import { T } from "../twitter-app";

const apiCallback = (err, data, res) => {
  if (err) {
    console.log('Error ->', err);    
  }
}

const likeTweet = id => T.post('favorites/create/:id', { id }, apiCallback);
const retweet = id => T.post('statuses/retweet/:id', { id }, apiCallback);

export { likeTweet, retweet };