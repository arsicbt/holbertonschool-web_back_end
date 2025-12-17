export default function uploadPhoto(fileName) {
  if (typeof fileName != 'string')
    return `${fileName} is not a string`

  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
