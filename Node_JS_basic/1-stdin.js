// affiche le message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// encoding pour lecture du text
process.stdin.setEncoding('utf8');

// ecoute l'entrée utilisateur
process.stdin.on('data', (data) => {
  // enleve la saut de ligne + affiche le nom
  process.stdout.write(`Your name is: ${data}`);
});

// ecoute la fin de stdin (Ctrl+D)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
