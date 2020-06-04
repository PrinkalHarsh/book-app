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
    borderTopLeftRadius: Size.moderateScale(18),
    borderTopRightRadius: Size.moderateScale(18),
    backgroundColor: Colors.Secondary,
    height: Size.deviceHeight * 0.7,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Size.moderateScale(30),
  },
  imageText: {
    margin: Size.moderateScale(30),
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(18),
    backgroundColor: Colors.Primary,
    borderRadius: Size.moderateScale(15),
    marginVertical: Size.moderateScale(20),
    marginHorizontal: Size.moderateScale(35),
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    color: Colors.Secondary,
    fontWeight: '600',
  },
  btnsignin: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(10),
    backgroundColor: Colors.Secondary,
    borderRadius: Size.moderateScale(15),
    borderWidth: Size.moderateScale(3),
    borderColor: 'black',
    marginVertical: Size.moderateScale(10),
    marginHorizontal: Size.moderateScale(35),
  },
  btnsigninText: {
    fontSize: Size.moderateScale(18),
    fontWeight: '600',
  },
});
