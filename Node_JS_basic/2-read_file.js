const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    // lecture synchronisée
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // filtrer les lignes vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  // Enlever l'en-tête
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  // compter les étudiants par champs
  const fields = {};

  students.forEach((line) => {
    const [firstname, field] = line.split(',').map((item) => item.trim());
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(firstname);
  });

  for (const field in fields) {
    const list = fields[field].join(', ');
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
  }
}

module.exports = countStudents;
