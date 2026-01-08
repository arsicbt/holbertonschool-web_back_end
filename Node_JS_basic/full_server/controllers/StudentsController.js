import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((data) => {
        let response = 'This is the list of our students';

        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field) => {
          const students = data[field];
          response += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        });

        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((data) => {
        const students = data[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
