export default function cleanSet(set, startString) {

  if(startString === '')
    return '';

  if(!(set instanceof Set) || typeof startString !== 'string')
    throw new Error('Bad argument: Bad argument(s) type(s)');

  const filteredOutput = [...set]
    .filter(value => typeof value === 'string' && value.startsWith((startString)))
    .map(value => value.slice(startString.length));

  return filteredOutput.join('-');
}
