import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Size.moderateScale(20),
    paddingVertical: Size.moderateScale(40),
  },
  content: {
    marginTop: Size.moderateScale(30),
    padding: Size.moderateScale(10),
  },
  bodytext: {
    color: Colors.Primary,
    fontSize: Size.moderateScale(20),
  },
  text: {
    color: 'grey',
    fontSize: Size.moderateScale(17),
  },
});
