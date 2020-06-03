import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.Primary,
    height: Size.deviceHeight * 0.18,
    paddingHorizontal: Size.moderateScale(20),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(22),
  },
  category: {
    backgroundColor: Colors.Primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  categoryText: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(16),
  },

  MainContainer: {
    flex: 1,
    padding: Size.moderateScale(5),
    alignItems: 'center',
  },

  contenttxt: {
    alignSelf: 'center',
    justifyContent: 'center',
    textDecorationLine: 'underline',
    color: Colors.Primary,
  },
  footer: {
    height: Size.deviceHeight * 0.13,
  },
  footerbtn: {
    alignItems: 'center',
    paddingVertical: Size.moderateScale(10),
    backgroundColor: Colors.Primary,
    borderRadius: Size.moderateScale(5),
    marginTop: Size.moderateScale(5),
    margin: Size.moderateScale(25),
  },
  btnText: {
    fontSize: Size.moderateScale(20),
    color: Colors.Secondary,
  },
});
