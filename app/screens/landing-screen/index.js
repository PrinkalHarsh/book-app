import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {HeaderBlock} from '@components';

export const LandingScreen = props => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      {/* content Block */}
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={Images.landingBook}
          resizeMode={'contain'}
        />
        <Text style={styles.contentText}>
          Welcome to the Online Library. A Service {'\n'}
          dedicated to knowledgeble people of {'\n'} the world. This is one of
          the largest and {'\n'} most authoritative collectin of online {'\n'}{' '}
          journals, books, and research resources,{'\n'} covering life, health,
          social and physical {'\n'} sciences.{' '}
        </Text>
      </View>
      {/* Footer Block */}
      <View style={styles.footer}>
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
