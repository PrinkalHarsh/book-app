import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    margin: Size.moderateScale(30),
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.moderateScale(40),
    height: Size.moderateScale(40),
  },
  image: {
    tintColor: 'white',
    height: Size.moderateScale(24),
    width: Size.moderateScale(14),
  },
});
