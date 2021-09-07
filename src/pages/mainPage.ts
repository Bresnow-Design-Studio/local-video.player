import { readFileSync } from 'fs'
import path from 'path'
import remove from '../functions/remove'

const filename = remove.extension(
  __filename.replace(__dirname, '').replace(/\\/g, '/')
)

const cssColors = readFileSync(
  path.join(__dirname, '../../assets/css/colors.css')
)

const cssFile: Buffer = readFileSync(
  path.join(__dirname, '../../assets/css/mainPage.css')
)

const css = `<style>${cssColors}${cssFile}</style>`

const mainPage = (videosBox: string) => `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home Video Player</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
      <script type="text/javascript">
        cssVars()
      </script>
      ${css}
    </head>
    <body>
      <h1 class="title">Series</h1>
      ${videosBox}
    </body>
  </html>
`

export default mainPage
