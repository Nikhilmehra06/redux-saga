import { IMAGES, STATS } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_FAIL,
  error,
});
const loadImagesStats = (id) => ({
  type: STATS.LOAD,
  id,
});

const setImagesStats = (id, download) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  download,
});

const setErrorStats = (error) => ({
  type: STATS.LOAD_FAIL,
  error,
});

export {
  loadImages,
  setImages,
  setError,
  loadImagesStats,
  setErrorStats,
  setImagesStats,
};
