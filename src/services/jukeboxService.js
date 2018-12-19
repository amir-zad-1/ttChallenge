'use strict';
const _getComponentsFromAPI = () => {
  return new Promise(resolve => {
    const components = [
      {
        "name": "audio"
      },
      {
        "name": "LED array"
      }
    ];
    return resolve(components);
  });
};

const getComponents = jukeboxId => {
  return new Promise(resolve => {
    const components = [];
    _getComponentsFromAPI().then(componentObjectArray => {
      componentObjectArray.forEach(componentObject => components.push(componentObject.name));
      return resolve(components);
    });
  });
};

export default {
  getComponents
}