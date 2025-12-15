export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) return [];

  const cityOfStudents = studentsList.filter(student => student.location === city);

  const studentsGraded = cityOfStudents.map(student => {
    const gradeObject = newGrades.find(g => Number(g.studentId) === Number(student.id));
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });

  return studentsGraded;
}
