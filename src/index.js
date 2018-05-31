import { users } from './users';
import Twit from 'twit';
import { apiKey } from './key';

const T = new Twit(apiKey);
const status = 'Consuming again with Twitter API... just a test';

T.post('statuses/update', { status }, (err, data, response) => {
  console.log('data', data);
});