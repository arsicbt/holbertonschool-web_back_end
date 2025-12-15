export default function updateUniqueItems(updatedMap) {

  updatedMap.forEach((value, key) => {
    if (value === 1) {
      updatedMap.set(key, 100);
    }
  });

  return updatedMap;
}
