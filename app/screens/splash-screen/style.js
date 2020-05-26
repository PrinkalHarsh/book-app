import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  ms,
} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6EA1',
  },
  container2: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    marginLeft: moderateScale(20),
  },
  image2: {
    alignSelf: 'center',
  },
});
