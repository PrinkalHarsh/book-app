import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';
import {Fonts} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  header: {
    height: Size.deviceHeight * 0.18,
    paddingHorizontal: Size.moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createaccountText: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(36),
    // fontWeight: '600',
    fontFamily: Fonts.header,
  },
  image: {
    justifyContent: 'center',
    tintColor: 'white',
    height: Size.moderateScale(24),
    width: Size.moderateScale(14),
  },
  content: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    borderTopRightRadius: Size.moderateScale(20),
    borderTopLeftRadius: Size.moderateScale(20),
    padding: Size.moderateScale(30),
  },
  form: {
    flex: 1,
  },
  formTextInput: {
    borderWidth: Size.moderateScale(1),
    borderColor: 'black',
    marginVertical: Size.moderateScale(15),
    padding: Size.moderateScale(15),
    borderRadius: Size.moderateScale(12),
    fontSize: Size.moderateScale(16),
  },
  error: {
    color: 'red',
  },
  footer: {
    backgroundColor: Colors.Secondary,
    height: Size.deviceHeight * 0.11,
    paddingBottom: Size.moderateScale(10),
    paddingHorizontal: Size.moderateScale(30),
  },
  btnsignup: {
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    borderRadius: Size.moderateScale(12),
    paddingVertical: Size.moderateScale(15),
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    fontWeight: '600',
    color: Colors.Secondary,
  },
  back: {
    width: Size.moderateScale(40),
    height: Size.moderateScale(40),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
