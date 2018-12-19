const getSettings = () => {
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
      }
    ];
    resolve(settings);
  });
};

export default {
  getSettings
}