import express from 'express';

const resumeRouter = express.Router();

resumeRouter.get('/', (req, res) => {
  res.send('reached /resume!');
});

export default resumeRouter;
