import * as React from 'react';
import {View, Text, Button} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from './style';
import {Images} from '@theme';

export const OnbordingScreen = props => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} height={200}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

      <Swiper
        style={styles.wrapper}
        height={100}
        dot={
          <View
            style={{
              backgroundColor: 'red',
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: null,
          right: 10,
        }}
        loop>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }>
          {/* <Image
            style={styles.image}
          /> */}
        </View>
      </Swiper>
    </View>
  );
};
