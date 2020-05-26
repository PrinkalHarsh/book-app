import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from './style';
import {Images} from '@theme';
import {
  scale,
  verticalScale,
  moderateScale,
  ms,
} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

export const OnbordingScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnskip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contents}>
        <Swiper
          showsButtons={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activedot} />}>
          <View style={styles.image1}>
            <Image source={Images.onboard1} />
            <Text style={styles.imagetxt}>
              Share Your Favourite Books {'\n'} With Your Family And Friends
            </Text>
          </View>
          <View style={styles.image}>
            <Image source={Images.onboard2} />
            <Text style={styles.imagetxt}>
              Discovery 20 Million {'\n'} Books Shelved Online
            </Text>
          </View>
          <View style={styles.image}>
            <Image source={Images.onboard3} />
            <Text style={styles.imagetxt3}>Buy And Sell Books With Us</Text>
          </View>
        </Swiper>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
