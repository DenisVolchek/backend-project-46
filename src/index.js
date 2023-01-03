import { readFileSync } from 'fs';
import parseInput from './parsers.js';

const getFileAsString = (filepath) => {
  const parser = parseInput(filepath);
  const readedFile = readFileSync(filepath);

  return parser(readedFile);
};

export default (path1, path2) => {
  const obj1 = getFileAsString(path1);
  const obj2 = getFileAsString(path2);

  const result = ['{'];

  const merge = { ...obj1, ...obj2 };

  Object.keys(merge).sort().forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      result.push(`- ${key}: ${obj1[key]}`);
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(obj1, key)) {
      result.push(`+ ${key}: ${obj2[key]}`);
      return;
    }

    if (obj1[key] !== obj2[key]) {
      result.push(`- ${key}: ${obj1[key]}`);
      result.push(`+ ${key}: ${obj2[key]}`);

      return;
    }

    result.push(`  ${key}: ${obj1[key]}`);
  });

  result.push('}');

  return result.join('\n');
};
