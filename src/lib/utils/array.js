export function inArray(validValues) {
  return (value) => {
    return validValues.includes(value)
  }
}
