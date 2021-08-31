import { readdirSync } from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import filter from './ts/filter'
dotenv.config()

const PATH_VIDEOS =
  process.env.PATH_VIDEOS || 'C:/Users/GUSTAVO/Downloads/Video/series'
const videoExtensions = ['.mp4', '.mkv']

const seriesFolder: string[] = readdirSync(PATH_VIDEOS)

let data: Map<string, { poster: string; chapters: string[] }> = new Map()

seriesFolder.forEach((series: string) => {
  const fileSeries = readdirSync(path.join(PATH_VIDEOS, series))
  const videos = filter.videos(fileSeries, videoExtensions)
  data.set(series, {
    poster: 'poster.jpg',
    chapters: videos
  })
})

console.log(data)

export default { path: PATH_VIDEOS, series: data }
