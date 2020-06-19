import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    paddingTop: Size.moderateScale(40),
  },
  input: {
    borderWidth: Size.moderateScale(1),
    borderColor: 'black',
    marginVertical: Size.moderateScale(15),
    padding: Size.moderateScale(15),
    borderRadius: Size.moderateScale(12),
    fontSize: Size.moderateScale(16),
  },
  header: {
    color: 'red',
  },
});
