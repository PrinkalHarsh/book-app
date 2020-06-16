import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {CardBlock} from '@components';
import styles from './style';

export const StoreScreen = props => {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);

  const OnPress = item => {
    props.navigation.navigate('detail', {
      itemId: item.id,
    });
  };

  // const onPress = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       title: 'foo',
  //       body: 'bar',
  //       userId: 2,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(json => console.log('add list', json));
  //   console.log('this is response', response);
  // };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        console.log('this is response', response);
        return response.json();
      })
      .then(json => {
        console.log('this is json', json);
        setData(json);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.btncontent}>
        <TouchableOpacity style={styles.btnadd} onPress={() => onPress()}>
          <Text style={styles.textadd}>Add</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}></View>
      </View> */}
      <View style={styles.viewcontent}>
        <FlatList
          data={data}
          keyExtractor={(item, id) => id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => OnPress(item)}>
              <CardBlock title={item.title} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
