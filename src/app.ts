import { IncomingMessage, ServerResponse } from 'http'
import dataVideos from './videos'
import { Server } from 'node-static'
import { readFileSync } from 'fs'
import path from 'path'

const fileServer = new Server(dataVideos.path)
const cssFile: Buffer = readFileSync(path.join(__dirname, 'css/index.css'))

const css = `<style>${cssFile}</style>`

const videosElements = dataVideos.videos.map((video: string) =>
  `
    <video class="video" src="/${video}" controls>
    </video>
  `.trim()
)

const mainPage: string = `
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
      <div class="video-container">
        ${videosElements}
      </div>
    </body>
  </html>
`

const app = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' }).end(mainPage)
    }
  }
  fileServer.serve(req, res)
}

export default app
