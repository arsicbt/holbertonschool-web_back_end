const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');

  if (lines.length <= 1) {
    throw new Error('Cannot load the database');
  }

  const students = lines.slice(1);
  const fields = {};

  students.forEach((line) => {
    const [firstname, , , field] = line.split(',');

    if (firstname && field) {
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  });

  const totalStudents = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  Object.keys(fields).forEach((field) => {
    const list = fields[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  });
}

module.exports = countStudents;
