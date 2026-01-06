const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(database)
      .then((output) => {
        res.end(output);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
