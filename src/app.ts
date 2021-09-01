import { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'node-static'
import dataVideos, { Chapter } from './videos'
import mainPage from './pages/mainPage'

const fileServer = new Server(dataVideos.path)

const serieTest = dataVideos.data.get('hercai')

const videosElements = serieTest?.chapters
  .map((video: Chapter) =>
    `
    <a class="video-link" href="${video.path}">
      <picture class="flayer" >
        <img src="${serieTest?.poster}
        " alt="${video.series} flayer"/>
      </picture>
      <label>${video.name}</label>
    </a>
  `.trim()
  )
  .join('')

const app = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res
        .writeHead(200, { 'Content-Type': 'text/html' })
        .end(mainPage(videosElements))
    }
  }
  fileServer.serve(req, res)
}

export default app
