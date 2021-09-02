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

let bySeries: Map<string, { poster: string; chapters: Chapter[] }> = new Map()

const allVideos: Chapter[] = []

seriesFolder.forEach((series: string) => {
  const fileSeries = readdirSync(path.join(PATH_VIDEOS, series))
  const videosSeries = filter.videos(fileSeries, videoExtensions)
  bySeries.set(series, {
    poster: `/${series}/poster.jpg`,
    chapters: videosSeries.map((video: string) => {
      const chapter: Chapter = {
        path: `/${series}/${video}`,
        name: video,
        series
      }
      allVideos.push(chapter)
      return chapter
    })
  })
})

const videos = {
  path: PATH_VIDEOS,
  series: seriesFolder,
  bySeries,
  all: allVideos
}

export default videos
