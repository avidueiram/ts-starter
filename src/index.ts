import { config } from 'dotenv';
import { environment } from './environments/environment';

config({ path: `.env.${environment.name}` });

console.log('Hello World', environment.name, process.env.EXAMPLE_SECRET);
