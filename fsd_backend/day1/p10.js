

const { writeFile } = require('fs');
const { readFile } = require('fs/promises');

const read = async () => {
  try {
    const data = await readFile('data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

read();