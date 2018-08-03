function findNestedKey(object = {}, key = '', path = '', res = {}) {
  if (Array.isArray(object)) {
    _.forEach(object, (element, index) => {
      path += `[${index}]`;
      findNestedKey(element, key, path, res);
    });
  } else if (typeof object === 'object') {
    if (_.has(object, key)) {
      let newPath = path;
      if (!_.isEmpty(newPath)) {
        newPath += '.';
      }
      newPath += key;
      res[newPath] = object[key];
    }
    Object.keys(object).forEach((k) => {
      if (Array.isArray(object)) {
        _.forEach(object[k], (element, index) => {
          path += `[${index}]`;
          findNestedKey(element, key, path, res);
        });
      } else if (typeof object[k] === 'object') {
        let newPath = path;
        if (!_.isEmpty(newPath)) {
          newPath += '.';
        }
        newPath += k;
        findNestedKey(object[k], key, newPath, res);
      }
    });
  }
  return res;
}
