import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './routes/index';
import { handleErrors } from './middlewares/handleErrors';
import '@utils/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);
app.use(handleErrors);

app.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});
