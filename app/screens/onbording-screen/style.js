import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  header: {
    paddingHorizontal: 10,
    height: Size.moderateScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnskip: {
    color: Colors.btnskip,
  },
  contents: {
    height: Size.moderateScale(400),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Size.moderateScale(10),
  },
  imagecontain: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Size.moderateScale(20),
    width: '100%',
  },
  dot: {
    backgroundColor: Colors.Secondary,
    width: Size.scale(10),
    height: Size.verticalScale(10),
    borderRadius: Size.moderateScale(10),
    borderWidth: Size.moderateScale(1),
    borderColor: Colors.Primary,
    marginLeft: Size.moderateScale(3),
    marginRight: Size.moderateScale(3),
    marginTop: Size.moderateScale(3),
    marginBottom: Size.moderateScale(3),
  },
  activedot: {
    backgroundColor: Colors.Primary,
    width: Size.scale(10),
    height: Size.verticalScale(10),
    borderRadius: Size.moderateScale(10),
    borderWidth: Size.moderateScale(1),
    borderColor: Colors.Primary,
    marginLeft: Size.moderateScale(3),
    marginRight: Size.moderateScale(3),
    marginTop: Size.moderateScale(3),
    marginBottom: Size.moderateScale(3),
  },
  image: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imagetxt: {
    marginTop: Size.moderateScale(40),
    alignSelf: 'center',
    fontSize: Size.moderateScale(20),
    textAlign: 'center',
  },
  btn: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: Size.moderateScale(10),
    backgroundColor: Colors.Primary,
    marginLeft: Size.moderateScale(100),
    borderRadius: Size.moderateScale(5),
  },
  btnText: {
    fontSize: Size.moderateScale(20),
    color: Colors.Secondary,
  },
});
