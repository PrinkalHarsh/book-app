import * as React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const header = () => {
  return (
    <View style={styles.content}>
      <Text>Book Share</Text>
    </View>
  );
};

export default header;
