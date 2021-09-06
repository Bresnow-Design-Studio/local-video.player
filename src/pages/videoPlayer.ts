import { readFileSync } from 'fs'
import path from 'path'
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
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${query.get('series')} - Home Video Player</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </head>
    <body>
      <h1 class="title">${remove.extension(query.get('video') || '')}</h1>
      <video class="video-player" controls autoplay>
        <source src="/${query.get('series')}/${query.get('video')}"></source>
      </video>
    </body>
  </html>
  `
}

export default videoPlayer
