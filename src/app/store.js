import { configureStore } from '@reduxjs/toolkit';
import videosSlice from '../features/videos/videosSlice';
import tagsSlice from '../features/tags/tagsSlice';
import videoSlice from '../features/video/videoSlice';
import relatedVideosSlice from '../features/relatedVideos/relatedVideosSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagsSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
    filter: filterSlice
  },
});
