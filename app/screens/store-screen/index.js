import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {CardBlock} from '@components';
import styles from './style';

export const StoreScreen = props => {
  const [data, setData] = useState([]);

  const OnPress = item => {
    // console.log(item);
    // alert(item.id);
    props.navigation.navigate('detail', {
      itemId: item.id,
      title: item.title,
      body: item.body,
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => OnPress(item)}>
            {/* <Text>Title:</Text> */}
            <CardBlock title={item.title} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
