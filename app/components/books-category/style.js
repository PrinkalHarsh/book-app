import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  imageThumbnail: {
    width: Size.deviceWidth * 0.3,
    height: Size.deviceWidth * 0.3,
    marginTop: Size.moderateScale(23),
  },
  item: {
    padding: Size.moderateScale(3),
  },
  test: {
    width: Size.deviceWidth * 0.3,
    height: Size.deviceWidth * 0.3,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: Size.moderateScale(30),
  },

  MainContainerText: {
    paddingLeft: Size.moderateScale(32),
    marginBottom: Size.moderateScale(10),
    fontSize: Size.moderateScale(16),
    paddingTop: Size.moderateScale(5),
  },
});
