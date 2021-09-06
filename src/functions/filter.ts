const videos = (filesPath: string[], videoExtensions: string[]): string[] => {
  return filesPath.filter((filePath: string) =>
    videoExtensions.some((extension: string) => filePath.endsWith(extension))
  )
}

const folders = (filesPath: string[]): string[] => {
  return filesPath.filter((filePath: string) => !/\.[a-z]+$/.test(filePath))
}

const filter = { videos, folders }

export default filter
