import { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'node-static'
import dataVideos, { Chapter } from './api/videos'
import mainPage from './pages/mainPage'
import videoPlayer from './pages/videoPlayer'
import videoCard from './components/videoCard'

const fileServer = new Server(dataVideos.path)

const seriesTest = dataVideos.data.get('doctor-milagro')

const videosElements = seriesTest?.chapters.map((video: Chapter) =>
  videoCard(video).trim()
)

const app = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res
        .writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
        .end(mainPage(videosElements?.join('')))
    } else if (req.url?.startsWith('/play')) {
      res
        .writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
        .end(videoPlayer(req.url.replace('/play', '')))
    }
  }
  fileServer.serve(req, res)
}

export default app
