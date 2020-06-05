import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  header: {
    height: Size.deviceHeight * 0.41,
    padding: Size.moderateScale(40),
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },
  signinText: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
  },
  image: {
    tintColor: 'white',
    height: Size.moderateScale(24),
    width: Size.moderateScale(14),
  },
  content: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    borderTopRightRadius: Size.moderateScale(20),
    borderTopLeftRadius: Size.moderateScale(20),
    padding: Size.moderateScale(20),
  },
  form: {
    flex: 1,
  },
  formText: {
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
    marginVertical: Size.moderateScale(15),
    paddingTop: Size.moderateScale(15),
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  formText1: {
    fontSize: Size.moderateScale(36),
    fontWeight: '600',
    paddingBottom: Size.moderateScale(7),
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  formTextInput: {
    borderWidth: Size.moderateScale(1),
    borderColor: 'black',
    marginVertical: Size.moderateScale(15),
    padding: Size.moderateScale(15),
    borderRadius: Size.moderateScale(12),
    fontSize: Size.moderateScale(16),
  },
  footer: {
    backgroundColor: Colors.Secondary,
    height: Size.deviceHeight * 0.12,
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.Primary,
    borderRadius: Size.moderateScale(12),
    marginHorizontal: Size.moderateScale(35),
    marginTop: Size.moderateScale(15),
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    fontWeight: '600',
    color: Colors.Secondary,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Size.moderateScale(40),
    height: Size.moderateScale(40),
  },
});
