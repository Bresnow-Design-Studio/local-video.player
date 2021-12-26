import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const PATH_VIDEOS = process.env.PATH_VIDEOS || "";
