import React, {useEffect} from 'react';
import {View, SafeAreaView, Image} from 'react-native';

import {Images} from '@theme';
import styles from './style';

export const SplashScreen = props => {
  useEffect(() => {
    setTimeout(function() {
      props.navigation.navigate('onbording');
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={Images.bookline} />
      <View style={styles.container2}>
        <Image style={styles.image2} source={Images.book} />
      </View>
    </View>
  );
};
