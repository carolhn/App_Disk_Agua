import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes/index';
import { handleErrors } from './middlewares/handleErrors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});
