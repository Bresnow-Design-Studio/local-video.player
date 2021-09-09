const separator = (array: any[], partLength: number): any[][] => {
  const parts: any[] = []

  for (var i = 0; i < array.length; i += partLength) {
    parts.push(array.slice(i, i + partLength))
  }

  return parts
}

export default separator
