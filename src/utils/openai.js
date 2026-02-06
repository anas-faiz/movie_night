import OpenAI from 'openai';
import { openai_key } from './constants';

const client = new OpenAI({
  apiKey: openai_key
});

export default client