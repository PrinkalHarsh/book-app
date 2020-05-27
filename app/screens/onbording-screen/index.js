import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

import Swiper from 'react-native-swiper';
import styles from './style';
import {onboarding} from '../../json/onbording';
// import {moderateScale} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

export const OnbordingScreen = props => {
  const [enableButton, setEnableButton] = useState(false);

  // useEffect
  // const onpress = () => {
  //   // setindex(index);
  //   // console.log(index);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnskip}>Skip</Text>
        </TouchableOpacity>
      </View>
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
      {enableButton ? (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate('welcome')}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
