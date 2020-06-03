import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Images} from '@theme';

export const BooksCategory = ({title, image_url, is_selected, onPress, id}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={image_url} style={styles.imageThumbnail} />

        {is_selected && (
          <View style={styles.test}>
            <Image source={Images.pink} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.MainContainerText}>
        {id} {title}
      </Text>
    </View>
  );
};
