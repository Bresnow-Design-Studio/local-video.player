import { readdirSync } from "fs";
import path from "path";
import filter from "../functions/filter";
import { PATH_VIDEOS } from "../config";

export interface Chapter {
  path: string;
  name: string;
  series: string;
  previous?: Chapter;
  next?: Chapter;
}

export interface Series {
  poster: string;
  chapters: Chapter[];
  firstChapter: Chapter;
  lastChapter: Chapter;
}

const videoExtensions = [".mp4", ".mkv"];

const seriesFolder: string[] = filter.folders(readdirSync(PATH_VIDEOS));

let bySeries: Map<string, Series> = new Map();

const allVideos: Chapter[] = [];

seriesFolder.forEach((series: string) => {
  const fileSeries: string[] = readdirSync(path.join(PATH_VIDEOS, series));
  const videosSeries: string[] = filter
    .videos(fileSeries, videoExtensions)
    .sort((videoPathA: string, videoPathB: string) =>
      videoPathA < videoPathB ? -1 : videoPathA > videoPathB ? 1 : 0
    );
  const chapters = videosSeries
    .map((video: string): Chapter => {
      const c: Chapter = {
        path: `/${series}/${video}`,
        name: video,
        series,
      };
      allVideos.push({ ...c });
      return c;
    })
    .map((c: Chapter, i: number, self: Chapter[]) => {
      c.previous = self[i - 1];
      c.next = self[i + 1];
      return c;
    });

  bySeries.set(series, {
    poster: `/${series}/poster.jpg`,
    chapters,
    firstChapter: chapters[0],
    lastChapter: chapters[chapters.length - 1],
  });
});

const videos = {
  path: PATH_VIDEOS,
  series: seriesFolder,
  bySeries,
  all: allVideos,
};

console.log(videos.all);

export default videos;
