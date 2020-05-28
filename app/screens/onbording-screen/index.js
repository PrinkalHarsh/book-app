import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';
import {onboarding} from '@json';

export const OnbordingScreen = props => {
  const [enableButton, setEnableButton] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Block */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => props.navigation.navigate('welcome')}>
        <Text style={styles.btnskip}>Skip</Text>
      </TouchableOpacity>

      {/* Swiper Block */}
      <View style={styles.contents}>
        <Swiper
          loop={false}
          index={0}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activedot} />}
          onIndexChanged={index => {
            index == onboarding.length - 1
              ? setEnableButton(true)
              : setEnableButton(false);
          }}>
          {onboarding.map((item, index) => {
            return (
              <View key={index} style={styles.imagecontain}>
                <View style={styles.image}>
                  <Image source={item.image_url} />
                </View>
                <Text style={styles.imagetxt}>{item.title}</Text>
              </View>
            );
          })}
        </Swiper>
      </View>

      {/* Footer Block  */}
      {enableButton ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};
