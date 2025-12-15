export default function createInt8TypedArray(length, position, value) {
  if(!Number(length) || !Number(position) || !Number(value))
    throw new Error('"Bad Argument: not a number');

  if(position >= length || position < 0)
    throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const int8data = new Int8Array(buffer);
  int8data[position] = value;

  // View permet d'écrire des données dans un ArrayBuffer
  const data = new DataView(buffer);

  return data
}
