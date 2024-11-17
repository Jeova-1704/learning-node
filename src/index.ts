import express, { Request, Response } from 'express';
import connectionDB from './config/database';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
    res.status(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectionDB.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Error connecting to the database', err));
});