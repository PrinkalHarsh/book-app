import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 10,
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnskip: {
    color: '#707070',
  },
  contents: {
    height: '55%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    marginTop: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#FF6EA1',
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
  },
  dot: {
    backgroundColor: 'white',
    width: scale(10),
    height: verticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#FF6EA1',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activedot: {
    backgroundColor: '#FF6EA1',
    width: scale(10),
    height: verticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#FF6EA1',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  image: {
    marginTop: moderateScale(50),
    alignSelf: 'center',
  },
  image1: {
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  imagetxt: {
    marginTop: moderateScale(40),
    alignSelf: 'center',
    fontSize: moderateScale(20),
    textAlign: 'center',
  },
  imagetxt3: {
    marginTop: moderateScale(70),
    alignSelf: 'center',
    fontSize: moderateScale(20),
    textAlign: 'center',
  },
});
