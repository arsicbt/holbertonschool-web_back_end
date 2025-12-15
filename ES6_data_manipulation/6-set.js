export default function setFormArray(array) {
  if(!Array.isArray(array))
    return [];

  return new Set(array)
}
