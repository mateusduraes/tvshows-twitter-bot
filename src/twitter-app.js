import Twit from 'twit';
import { apiKey } from './key';

const T = new Twit(apiKey);

export { T };
