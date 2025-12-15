export default function createInt8TypedArray(length, position, value) {
  if(!Number(length) || !Number(position) || !Number(value))
    console.log("Bad Argument: not a number")

  const buffer = new ArrayBuffer(length);
  const int8data = new Int8Array(buffer);
  int8data[position] = value;

  // View permet d'écrire des données dans un ArrayBuffer
  const data = new DataView(buffer);

  return data
}
