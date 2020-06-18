import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {CardBlock} from '@components';
import styles from './style';

export const StoreScreen = () => {
  const [data, setData] = useState({count: 0, mul: 1});
  console.log('initial data is', data);

  const onpress = () => {
    setData({count: data.count + 1, mul: data.mul * 2});
    console.log('update mul', data.mul);
    console.log('update count', data.count);
  };

  return (
    <View style={styles.container}>
      <Text>{data.count}</Text>
      <Text>{data.mul}</Text>
      <TouchableOpacity onPress={() => onpress()}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};
