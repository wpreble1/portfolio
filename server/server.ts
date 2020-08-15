import express, { Request, Response } from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routes);
app.use(express.static(`${path.resolve('./')}/client/build`));
app.get('*', (req: Request, res: Response) => {
  res.sendFile(`${path.resolve('./')}/client/build/index.html`);
});

export default server;
