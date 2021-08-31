const videos = (filesPath: string[], videoExtensions: string[]): string[] => {
  return filesPath.filter((filePath: string) =>
    videoExtensions.some((extension: string) => filePath.endsWith(extension))
  )
}

const filter = { videos }

export default filter
