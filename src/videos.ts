import { readdirSync } from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const PATH_VIDEOS =
  process.env.PATH_VIDEOS || 'C:/Users/GUSTAVO/Downloads/Video'

const folder = readdirSync(PATH_VIDEOS)

const videoExtensions = ['.mp4', '.mkv']

const videos = folder.filter((filePath: string) =>
  videoExtensions.some((extension: string) => filePath.endsWith(extension))
)
// .map((videoPath: string) => path.join(PATH_VIDEOS, videoPath))

export default { path: PATH_VIDEOS, videos }
