import { Chapter } from './../api/videos'
import videoCard from './videoCard'
import separator from '../functions/separator'

export const videosBox = (videos: Chapter[]): string => {
  const videoElements = videos
    .map((video: Chapter) => videoCard(video))
    .join('')
  return `
    <div class="video-container">
      ${videoElements}
    </div>
  `.trim()
}

export const oldVideosBox = (videos: Chapter[]): string => {
  const videoElements = videos.map((video: Chapter) => videoCard(video))

  const tableRows: string[][] = separator(videoElements, 4)

  return `
    <table class="video-container">
      ${tableRows
        .map((tableRow: string[]) => {
          return `
            <tr>
              ${tableRow.map((ceil: string) => `<td>${ceil}</td>`).join('')}
            </tr>
          `.trim()
        })
        .join('')}
    </table>
  `
}
