import { previousVideoLink, nextVideoLink } from './../components/videoLink'
import { readFileSync } from 'fs'
import path from 'path'
import videos, { Chapter } from '../api/videos'
import remove from '../functions/remove'

const cssColors = readFileSync(
  path.join(__dirname, '../../assets/css/colors.css')
)

const cssFile: Buffer = readFileSync(
  path.join(__dirname, '../../assets/css/videoPlayer.css')
)

const css = `<style>${cssColors}${cssFile}</style>`

const videoPlayer = (videoPath: string): string => {
  const query = new URLSearchParams(videoPath)
  console.log(
    `Serie: ${query.get('series')} - Chapter: ${remove.extension(
      query.get('video') || ''
    )}`
  )

  const video = videos.bySeries
    .get(query.get('series') || '')
    ?.chapters.find((c: Chapter) => c.name === query.get('video'))

  console.log(video)

  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${video?.series} - Home Video Player</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      ${css}
    </head>
    <body>
      <h1 class="title">${remove.extension(video?.name)}</h1>
      <div class="video-box">
        <video class="video-player" controls autoplay preload="auto">
          <source src="${video?.path}"></source>
        </video>
        <div class="video-links">
          ${video?.previous ? previousVideoLink(video) : ''}
          ${video?.next ? nextVideoLink(video) : ''}
        </div>
      </div>
    </body>
  </html>
  `.trim()
}

export default videoPlayer
