'use strict';
const getSettingsFromAPI = () => {
  return new Promise(resolve => {
    const settings = [
      {
        "name": "Mixer",
        "requires": ["audio", "pcb"],
      },
      {
        "name": "AttractLoop",
        "requires": [],
      },
      {
        "name": "Volume",
        "requires": ["audio"]
      },
      {
        "name": "CardReader",
        "requires": ["nfc"]
      }
    ];
    return resolve(settings);
  });
};

export default {
  getAll: getSettingsFromAPI
}