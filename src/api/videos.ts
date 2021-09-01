import { readdirSync } from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import filter from '../ts/filter'
dotenv.config()

export interface Chapter {
  path: string
  name: string
  series: string
}

const PATH_VIDEOS =
  process.env.PATH_VIDEOS || 'C:/Users/GUSTAVO/Downloads/Video/series'
const videoExtensions = ['.mp4', '.mkv']

const seriesFolder: string[] = filter.folders(readdirSync(PATH_VIDEOS))

let data: Map<string, { poster: string; chapters: Chapter[] }> = new Map()

seriesFolder.forEach((series: string) => {
  const fileSeries = readdirSync(path.join(PATH_VIDEOS, series))
  const videos = filter.videos(fileSeries, videoExtensions)
  data.set(series, {
    poster: `/${series}/poster.jpg`,
    chapters: videos.map((video: string) => ({
      path: `/${series}/${video}`,
      name: video,
      series
    }))
  })
})

export default { path: PATH_VIDEOS, series: seriesFolder, data }
