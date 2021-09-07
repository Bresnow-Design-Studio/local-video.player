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
      <video class="video-player" controls autoplay>
        <source src="${video?.path}"></source>
      </video>
      ${
        video?.previous
          ? `<a 
              class="video-link previous" 
              href="/play?series=${video.previous.series}&video=${video.previous.name}"
            >
              Video anterior
            </a>`
          : ''
      }

      ${
        video?.next
          ? `<a 
              class="video-link next" 
              href="/play?series=${video.next.series}&video=${video.next.name}"
            >
              Siguiente video
            </a>`
          : ''
      }

    </body>
  </html>
  `.trim()
}

export default videoPlayer
