import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  header: {
    backgroundColor: Colors.Primary,
    height: Size.deviceHeight * 0.3,
    paddingHorizontal: Size.moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
  },
  content: {
    height: Size.deviceHeight * 0.7,
    backgroundColor: Colors.Secondary,
    borderTopRightRadius: Size.moderateScale(20),
    borderTopLeftRadius: Size.moderateScale(20),
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: Size.moderateScale(30),
  },
  back: {
    paddingVertical: Size.moderateScale(10),
  },
  backText: {
    fontSize: Size.moderateScale(32),
    fontWeight: '400',
  },
  form: {},
  formText: {
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
  },
  formTextInput: {},
  btnsignup: {},
  btnsignupText: {},
});
