import {StyleSheet} from 'react-native';
import {Size} from '@theme';

import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary,
  },
  container2: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    marginLeft: Size.moderateScale(20),
  },
  image2: {
    alignSelf: 'center',
  },
});
