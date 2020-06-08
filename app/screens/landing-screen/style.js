import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  header: {
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
    flex: 1,
    borderTopLeftRadius: Size.moderateScale(18),
    borderTopRightRadius: Size.moderateScale(18),
    backgroundColor: Colors.Secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Size.deviceHeight * 0.15,
    width: Size.deviceHeight * 0.2,
    marginTop: Size.moderateScale(5),
  },
  contentText: {
    margin: Size.moderateScale(25),
    fontSize: Size.moderateScale(16),
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnsignup: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.Primary,
    borderRadius: Size.moderateScale(15),
    marginHorizontal: Size.moderateScale(35),
    marginTop: Size.moderateScale(10),
  },
  btnsignupText: {
    fontSize: Size.moderateScale(18),
    color: Colors.Secondary,
    fontWeight: '600',
  },
  btnsignin: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(15),
    backgroundColor: Colors.Secondary,
    borderRadius: Size.moderateScale(15),
    borderWidth: Size.moderateScale(3),
    borderColor: 'black',
    marginHorizontal: Size.moderateScale(35),
    marginTop: Size.moderateScale(15),
  },
  btnsigninText: {
    fontSize: Size.moderateScale(18),
    fontWeight: '600',
  },
  footer: {
    height: Size.deviceHeight * 0.24,
    backgroundColor: Colors.Secondary,
  },
});
