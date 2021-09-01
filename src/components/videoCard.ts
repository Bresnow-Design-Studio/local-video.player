import videos, { Chapter } from './../api/videos'
import remove from '../ts/remove'

const videoCard = (video: Chapter): string => {
  return `
    <a 
      class="video-card" 
      href="/play?series=${video.series}&video=${video.name}"
    >
      <picture class="video-card__image" >
        <img 
          src="${videos.data.get(video.series)?.poster}" 
          alt="${video.series} flayer"
        />
      </picture>
      <label class="video-card__name">${remove.extension(video.name)}</label>
    </a>
  `
}

export default videoCard
