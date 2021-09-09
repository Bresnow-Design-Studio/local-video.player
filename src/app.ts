import { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'node-static'
import videos from './api/videos'
import mainPage from './pages/mainPage'
import videoPlayer from './pages/videoPlayer'
import { oldVideosBox, videosBox } from './components/videosBox'

const fileServer = new Server(videos.path)

const videoTest = videos.bySeries.get('doctor-milagro')

console.log(oldVideosBox(videoTest?.chapters || []))

const app = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res
        .writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
        .end(mainPage(oldVideosBox(videoTest?.chapters || [])))
    } else if (req.url?.startsWith('/play')) {
      res
        .writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' })
        .end(videoPlayer(req.url.replace('/play', '')))
    }
  }
  fileServer.serve(req, res)
}

export default app
