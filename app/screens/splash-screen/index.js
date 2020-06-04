import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Images} from '@theme';
import styles from './style';

export const SplashScreen = props => {
  // Timeout Function For Splash Screen
  useEffect(() => {
    setTimeout(function() {
      props.navigation.navigate('onbording');
    }, 2000);
  });

  return (
    // Splash Screen
    <View style={styles.container}>
      <Image
        style={styles.verticalImage}
        source={Images.bookline}
        resizeMode="stretch"
      />
      <View style={styles.container2}>
        <Image source={Images.book} />
      </View>
    </View>
  );
};
