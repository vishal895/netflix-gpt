import OpenAI from 'openai';
import { open_api } from '../constants';

const openai = new OpenAI({
  apiKey: open_api, 
  dangerouslyAllowBrowser: true
  // defaults to process.env["OPENAI_API_KEY"]
});

export default openai