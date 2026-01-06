// Importer le module File System avec la version Promises (asynchrone)
const fs = require('fs').promises;

// Fonction asynchrone qui compte et affiche les étudiants d'un fichier CSV
async function countStudents(path) {
  try {
    // Lire le fichier de manière asynchrone
    // 'utf8' = encodage pour lire en texte (pas en binaire)
    // 'await' = attend que la lecture soit terminée
    const data = await fs.readFile(path, 'utf8');
    
    // Diviser le contenu en lignes et supprimer les lignes vides
    // split('\n') = sépare à chaque saut de ligne
    // filter() = garde seulement les lignes non-vides
    // trim() = enlève les espaces avant/après
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // Vérifier qu'il y a au moins 2 lignes (header + 1 étudiant minimum)
    // Si <= 1 ligne, le fichier est invalide
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extraire toutes les lignes sauf la première (qui est le header)
    // slice(1) = prend tout à partir de l'index 1
    const students = lines.slice(1);
    
    // Créer un objet vide pour grouper les étudiants par domaine
    // Format final : { CS: ['Johann', 'Arielle'], SWE: ['Paul'] }
    const fields = {};

    // Parcourir chaque ligne d'étudiant
    students.forEach((line) => {
      // Destructuring : extraire firstname (1er élément) et field (4ème élément)
      // split(',') = sépare la ligne à chaque virgule
      // Les ", ," ignorent le 2ème et 3ème élément (lastname et age)
      const [firstname, , , field] = line.split(',');
      
      // Vérifier que firstname et field existent (protection contre lignes mal formatées)
      if (firstname && field) {
        // Si ce domaine n'existe pas encore dans l'objet, créer un tableau vide
        if (!fields[field]) {
          fields[field] = [];
        }
        // Ajouter le prénom dans le tableau du domaine correspondant
        fields[field].push(firstname);
      }
    });

    // Calculer le nombre total d'étudiants
    // Object.values(fields) = extrait tous les tableaux de prénoms
    // reduce() = additionne la longueur de chaque tableau
    // sum = accumulateur qui commence à 0
    const totalStudents = Object.values(fields).reduce((sum, list) => sum + list.length, 0);
    
    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${totalStudents}`);

    // Parcourir chaque domaine (CS, SWE, etc.)
    // Object.keys(fields) = extrait les noms des domaines
    Object.keys(fields).forEach((field) => {
      // Récupérer le tableau des prénoms pour ce domaine
      const list = fields[field];
      
      // Afficher le nombre d'étudiants et la liste des prénoms
      // list.length = nombre d'étudiants dans ce domaine
      // list.join(', ') = joint tous les prénoms avec des virgules
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    });
  } catch (err) {
    // Si une erreur survient (fichier introuvable, etc.), lancer cette erreur
    throw new Error('Cannot load the database');
  }
}

// Exporter la fonction pour qu'elle soit utilisable dans d'autres fichiers
module.exports = countStudents;