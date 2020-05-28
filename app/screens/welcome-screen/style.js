import {StyleSheet} from 'react-native';
import {Size} from '@theme';
import {Colors} from '@theme';

export default StyleSheet.create({
  container: {
    flex: Size.moderateScale(1),
  },
  header: {
    backgroundColor: Colors.Primary,
    height: Size.moderateScale(130),
    width: '100%',
  },
  headertext: {
    color: Colors.Secondary,
    fontSize: Size.moderateScale(22),
    marginTop: Size.moderateScale(40),
    paddingHorizontal: Size.moderateScale(22),
  },
  content: {
    paddingTop: Size.moderateScale(40),
    height: Size.moderateScale(550),
    width: '100%',
    marginRight: Size.moderateScale(40),
    justifyContent: 'space-around',
  },
  item: {
    marginBottom: Size.moderateScale(35),
    justifyContent: 'space-between',
    paddingLeft: Size.moderateScale(20),
  },
  test: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  itemtxt: {
    paddingLeft: Size.moderateScale(20),
    marginTop: Size.moderateScale(10),
    fontSize: Size.moderateScale(16),
  },
  touchablecontent: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenttxt: {
    textDecorationLine: 'underline',
    color: Colors.Primary,
  },

  footer: {
    width: '85%',
    alignItems: 'center',
    paddingVertical: Size.moderateScale(10),
    backgroundColor: Colors.Primary,
    marginLeft: Size.moderateScale(27),
    borderRadius: Size.moderateScale(5),
    marginTop: Size.moderateScale(5),
  },
  btnText: {
    fontSize: Size.moderateScale(20),
    color: Colors.Secondary,
  },
});
