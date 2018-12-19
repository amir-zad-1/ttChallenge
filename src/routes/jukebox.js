'use strict';
import express from 'express';

import jukebox from '../models/jukebox';

const jukeboxRouter = express.Router();

jukeboxRouter.get('/:id/settings', (request, response) => {
  const jukeboxId = request.params.id;
  jukebox.getSettings(jukeboxId).then(settings => {
    return response.json(settings)
  });
});

module.exports = jukeboxRouter;
