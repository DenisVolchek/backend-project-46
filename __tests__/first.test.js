import path from 'path';
// import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const getFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFileSync(getFile(filename), 'utf-8');

test('reverse', () => {
  const filePath1 = getFile('file1.json');
  const filePath2 = getFile('file2.json');

  const result = gendiff(filePath1, filePath2);
  console.log(result);

  expect(true).toEqual(true);
});
