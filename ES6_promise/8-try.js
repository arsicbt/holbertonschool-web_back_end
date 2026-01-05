export default function divideFunction(numerator, denominator) {
  if (typeof numerator != "number" || typeof denominator != "number")
    return `${numerator} or ${denominator} should be a number`

  if (numerator === 0 || denominator === 0) {
    const err = "cannot divide by 0"
    throw new Error(err)
  }

  return numerator / denominator
}
