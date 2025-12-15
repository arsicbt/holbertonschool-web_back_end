export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if(!Array.isArray(studentsList) || !Array.isArray(newGrades))
    return []

  // Récupérer les étudiants de la ville
  const cityOfStudents = studentsList.filter(i => i.location === city);
  // find cherche la note donnée
  const studentsGraded = cityOfStudents.map(j => {
    const gradeObject = newGrades.find(j => j.studentId === j.id);
    return {
      ...j,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });

  return studentsGraded;
}
