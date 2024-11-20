import {Dimensions, PixelRatio, Platform} from 'react-native';

// Design System Values
const DESIGN_WIDTH = 414;
const DESIGN_HEIGHT = 896;

// Screen Sizes
export const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// Useful Constants
// const SCREEN_WIDTH_PERCENTAGE = (WIDTH / DESIGN_WIDTH) * 100;
// const SCREEN_HEIGHT_PERCENTAGE = (HEIGHT / DESIGN_HEIGHT) * 100;

const normalizeWidth = (size: number): number => {
  const value = (size / DESIGN_WIDTH) * WIDTH;
  return PixelRatio.roundToNearestPixel(value);
};

const normalizeHeight = (size: number): number => {
  const value = (size / DESIGN_HEIGHT) * HEIGHT;
  return PixelRatio.roundToNearestPixel(value);
};

const normalizeFont = (size: number): number => {
  if (HEIGHT > 1000) {
    size = size * 1.7;
  } else if (HEIGHT <= 1000 && HEIGHT > 800) {
    size = size * 1.3;
  }
  const newSize = (size / DESIGN_WIDTH) * WIDTH;

  return (
    Platform.select({
      ios: PixelRatio.roundToNearestPixel(newSize),
      android: PixelRatio.roundToNearestPixel(newSize) * 1.4 - 2,
    }) ?? newSize
  );
};

const SW = normalizeWidth;
const SH = normalizeHeight;
const SF = normalizeFont;

export {SH, SW, SF};
