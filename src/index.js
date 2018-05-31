const users = require('./users');
const Twit = require('twit');

const T = new Twit({
  consumer_key: '...',
  consumer_secret: '...',
  access_token: '...',
  access_token_secret: '...',
});

const status = 'Consuming again with Twitter API... just a test';
T.post('statuses/update', { status }, (err, data, response) => {
  console.log('data', data);
});