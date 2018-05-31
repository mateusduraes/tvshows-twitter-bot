import { T } from "../twitter-app";

const apiCallback = (err, data, res) => {
  if (err) {
    console.log('Error ->', err);    
  }
}

const likeTweet = id => T.post('favorites/create', { id }, apiCallback);
const retweet = id => T.post('statuses/retweet/:id', { id }, apiCallback);

const getFriendsIds = async () => {
  const result = await T.get('friends/ids');
  return result.data.ids;
};



export { likeTweet, retweet, getFriendsIds };