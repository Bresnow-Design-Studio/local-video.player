import { URL } from 'url'
import { Chapter } from '../api/videos'
import remove from '../ts/remove'

const videoPlayer = (videoPath: string): string => {
  const query = new URLSearchParams(videoPath)
  console.log(
    `Serie: ${query.get('series')} - Chapter: ${remove.extension(
      query.get('video') || ''
    )})}`
  )
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Video Player</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
    </head>
    <body>
      <h1 class="title">${remove.extension(query.get('video') || '')}</h1>
      <video controls autoplay>
        <source src="/${query.get('series')}/${query.get('video')}"></source>
      </video>
    </body>
  </html>
  `
}

export default videoPlayer
