export default function hasValuesFromArray(set, array) {
  if(!Array.isArray(array) || !Set.isSet(set))
    throw new Error('Bad argument: incorrect argument type');

  return array.every(value => set.has(value));
}
