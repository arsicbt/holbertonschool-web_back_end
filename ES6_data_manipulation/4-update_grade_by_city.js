export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if(Array.isArray(studentsList) || Array.isArray(newGrades))
    return []

  // Récupérer les étudiants de la ville
  cityOfStudents = studentsList.filter(i => i.location === city);
  // find cherche la note donnée
  studentsGraded = cityOfStudents.map(j => {
    const gradeObject = addGrades.find(j => j.studentId === j.id);
    return {
      ...j,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });

  return studentsGraded;
}
