import express from 'express';

import settingService from '../services/settingService';

const userRouter = express.Router();

userRouter.get('/', (request, response, next) => {
  settingService.getSettings();
  response.json({ok: true});
});

module.exports = userRouter;
