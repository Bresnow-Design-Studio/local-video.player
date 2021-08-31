import { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'node-static'
import dataVideos from './videos'
import mainPage from './pages/mainPage'

const fileServer = new Server(dataVideos.path)

// const videosElements: string = dataVideos.videos
//   .map((video: string) =>
//     `
//     <a class="video-link" href="${video}">
//       <picture class="flayer" >
//         <img src="
//         https://scontent.flim10-1.fna.fbcdn.net/v/t1.6435-9/177844604_780830722825783_7673734391782556017_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFCvuZRctwzz1MTDJHbgfZ32UwnWhsDlazZTCdaGwOVrI6UTZTw5dVkFSEcizvNJ3-PSRd2Mw403eTtJZiOEk-L&_nc_ohc=C4A71cigdiYAX8XcQ-3&_nc_ht=scontent.flim10-1.fna&oh=ae0361b2a389020ed472abff57539464&oe=61550E67
//         " alt="Hercai flayer"/>
//       </picture>
//       <label>${video}</label>
//     </a>
//   `.trim()
//   )
//   .join(' ')

const app = (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' }).end(mainPage(''))
    }
  }
  fileServer.serve(req, res)
}

export default app
