const getComponents = () => {
  return new Promise(resolve => {
    const components = [
      {
        "name": "audio"
      },
      {
        "name": "LED array"
      }
    ];
    resolve(components);
  });
};

export default {
  getComponents
}