export default function hasValuesFromArray(set, array) {
  if(!Array.isArray(array) || !(set instanceof Set))
    throw new Error('Bad argument: incorrect argument type');

  return array.every(value => set.has(value));
}
