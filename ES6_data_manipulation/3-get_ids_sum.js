export default function getStudentIdsSum(studentsList) {
  if(!Array.isArray(studentsList))
    return [];

  return studentsList.reduce((sum, i) => sum + i.id, 0);
}
