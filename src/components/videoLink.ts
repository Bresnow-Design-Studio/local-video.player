import { Chapter } from './../api/videos'

export const previousVideoLink = (video: Chapter): String => {
  return `
    <a 
      class="video-link previous" 
      href="/play?series=${video.previous?.series}&video=${video.previous?.name}"
    >
      Anterior
    </a>
  `.trim()
}

export const nextVideoLink = (video: Chapter): String => {
  return `
    <a 
      class="video-link next" 
      href="/play?series=${video.next?.series}&video=${video.next?.name}"
    >
      Siguiente
    </a>
  `.trim()
}
