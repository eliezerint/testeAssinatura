import {Dimensions, PixelRatio} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

if (screenWidth > screenHeight) {
  screenWidth = Dimensions.get('window').height;
  screenHeight = Dimensions.get('window').width;
}

function widthPercentageToDP(widthPercent: number) {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
}

function heightPercentageToDP(heightPercent: number) {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
}

export {widthPercentageToDP, heightPercentageToDP};
