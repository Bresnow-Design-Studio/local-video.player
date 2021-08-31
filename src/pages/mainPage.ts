import { readFileSync } from 'fs'
import path from 'path'

const cssFile: Buffer = readFileSync(path.join(__dirname, '../css/index.css'))

const css = `<style>${cssFile}</style>`

const mainPage = (videos: string) => `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Video Player</title>
      ${css}
    </head>
    <body>
      <h1 class="title">Videos</h1>
      <div class="video-container">
        ${videos}
      </div>
    </body>
  </html>
`

export default mainPage
