import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
    paddingTop: Size.moderateScale(40),
  },
  btncontent: {
    height: Size.deviceHeight * 0.05,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  viewcontent: {
    height: Size.deviceHeight * 0.9,
  },
  btnadd: {
    marginHorizontal: Size.moderateScale(20),
    backgroundColor: Colors.detailback,
    paddingHorizontal: Size.moderateScale(10),
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textadd: {
    color: Colors.Primary,
    fontSize: Size.moderateScale(16),
  },
});
