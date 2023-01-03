import path from 'path';
import yaml from 'js-yaml';

export default (path1) => {
  const format = path.extname(path1);

  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yml':
    case '.yaml':
      return yaml.load;
    default:
      return JSON.parse;
  }
};
