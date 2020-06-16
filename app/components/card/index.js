import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export const CardBlock = ({title, body}) => {
  return (
    <View style={styles.container}>
      {/* Card Block */}
      <View style={styles.card}>
        {/* Title Block */}
        <Text style={styles.titletext}>
          Title:
          <Text style={styles.text}> {title}</Text>
        </Text>
        {/* Body Block */}
        {/* <Text style={styles.text}> {body}</Text> */}
      </View>
    </View>
  );
};
