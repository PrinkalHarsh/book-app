import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {Images} from '@theme';

export const HeaderBlock = () => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back}>
          <Image
            style={styles.image}
            source={Images.group}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};
