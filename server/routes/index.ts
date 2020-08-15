import { Router } from 'express';
import resumeRouter from './resume';

const routes = Router();

routes.use('/resume', resumeRouter);

export default routes;
