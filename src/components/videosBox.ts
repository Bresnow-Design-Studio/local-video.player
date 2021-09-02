import { Chapter } from './../api/videos'
import videoCard from './videoCard'

const videosBox = (videos: Chapter[]): string => {
  const videoElements = videos
    .map((video: Chapter) => videoCard(video))
    .join('')
  return `
    <div class="video-container">
      ${videoElements}
    </div>
  `.trim()
}

export default videosBox
