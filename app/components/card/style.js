import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Size.moderateScale(20),
  },
  card: {
    backgroundColor: Colors.Secondary,
    height: Size.deviceHeight * 0.1,
    borderRadius: Size.moderateScale(15),
    marginTop: Size.moderateScale(20),
    padding: Size.moderateScale(15),
  },
  titletext: {
    color: Colors.Primary,
    fontSize: Size.moderateScale(22),
  },
  bodytext: {
    fontSize: Size.moderateScale(20),
    color: Colors.Primary,
  },
  text: {
    color: 'grey',
    fontSize: Size.moderateScale(17),
  },
});
