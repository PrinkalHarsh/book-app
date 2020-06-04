import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';

export const LandingScreen = props => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      {/* content Block */}
      <View style={styles.content}>
        <View style={styles.image}>
          <Image source={Images.pink} />
          <Image source={Images.text} style={styles.imageText} />
        </View>

        {/* Footer Block */}

        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => props.navigation.navigate('signup')}>
          <Text style={styles.btnsignupText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnsignin}
          onPress={() => props.navigation.navigate('signin')}>
          <Text style={styles.btnsigninText}>sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
