import settingsService from "../services/settingService";

const filterByComponents = componentList => {
  return new Promise(resolve => {
    settingsService.getAll().then(settings => {
      const filteredSettingsSet = new Set();
      componentList.forEach(component => {
        const filteredSettings = settings.filter(setting => setting.requires.includes(component) || setting.requires.length === 0);
        filteredSettings.forEach(setting => filteredSettingsSet.add(setting));
      });
      return resolve(Array.from(filteredSettingsSet));
    });
  });
};

export default {
  filterByComponents
}