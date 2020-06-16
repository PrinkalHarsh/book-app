import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';

export const DetailScreen = ({route}) => {
  const {itemId} = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.bodytext}>Title: </Text>
        <Text style={styles.text}>{data.title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.bodytext}>Body: </Text>
        <Text style={styles.text}>{data.body} </Text>
      </View>
    </View>
  );
};
