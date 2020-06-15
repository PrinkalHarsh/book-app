import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import styles from './style';

export const CardBlock = ({title, body}) => {
  return (
    <View style={styles.container}>
      {/* Card Block */}
      <View style={styles.card}>
        <Text style={styles.titletext}>
          Title:
          <Text style={styles.text}> {title}</Text>
        </Text>
        <Text style={styles.bodytext}>
          <Text style={styles.text}> {body}</Text>
        </Text>
      </View>
    </View>
  );
};
