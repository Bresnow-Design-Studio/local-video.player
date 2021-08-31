import { readdirSync } from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const PATH_VIDEOS =
  process.env.PATH_VIDEOS || 'C:/Users/GUSTAVO/Downloads/Video/series/hercai/'

const series = readdirSync(PATH_VIDEOS)

// const videos =

const videoExtensions = ['.mp4', '.mkv']

const videos = series.filter((filePath: string) =>
  videoExtensions.some((extension: string) => filePath.endsWith(extension))
)

export default { path: PATH_VIDEOS, videos }
