import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';

export const DetailScreen = ({route}) => {
  const {itemId, title, body} = route.params;
  useEffect(() => {
    // var api = 'https://jsonplaceholder.typicode.com/posts/';

    // var url = api + itemId;
    // console.log('Final url', url, itemId);
    fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
      .then(response => response.json())
      .then(json => {
        console.log('post', json);
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        "Title": {title} , "Body": {body}
      </Text>
    </View>
  );
};
