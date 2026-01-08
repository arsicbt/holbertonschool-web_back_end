const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async');

const database = process.argv[2] ? path.resolve(process.argv[2]) : null;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    if (!database) {
      res.statusCode = 500;
      res.end('Cannot load the database');
      return;
    }

    countStudents(database)
      .then((output) => {
        res.end(output);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
