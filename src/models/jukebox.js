import settings from './settings';
import jukeboxService from '../services/jukeboxService';

const getSettings = jukeboxId => {
  return new Promise(resolve => {
    jukeboxService.getComponents(jukeboxId).then(componentList => {
      settings.filterByComponents(componentList).then(filteredSettings => {
        return resolve(filteredSettings);
      });
    });
  });
};

export default {
  getSettings
}
