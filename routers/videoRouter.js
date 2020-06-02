import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  editVideos,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideos);
videoRouter.get(routes.deleteVideo, deleteVideo);
export default videoRouter;
