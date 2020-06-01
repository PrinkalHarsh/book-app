import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Images} from '@theme';

export const BooksCategory = ({title, image_url, is_selected, onPress}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{flex: 1, flexDirection: 'column', margin: 1}}>
        <Image source={image_url} style={styles.imageThumbnail} />

        {is_selected && (
          <View style={styles.test}>
            <Image source={Images.pink} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.MainContainerText}>{title}</Text>
    </View>
  );
};
