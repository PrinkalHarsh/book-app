import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DATA} from '@json';
import {Item} from '@components';

export const WelcomeScreen = props => {
  const [topics, setTopics] = useState(DATA);
  const [extra, setextra] = useState(0);

  const onPress = index => {
    for (var i = 0; i < topics.length; i++) {
      if (topics[index].length < i) {
        console.log('hello >>>');
        console.log(index);
      }
    }
    // if (topics[i].title == topics[index].title) {
    //   topics[i].is_selected = !topics[i].is_selected;
    // }
    setTopics(topics);
    setextra(extra + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerText}>Choose the topics</Text>
      </View>
      <View style={styles.MainContainer}>
        <FlatList
          data={topics}
          renderItem={({item, index}) => (
            <Item
              onPress={() => onPress(index)}
              title={item.title}
              image_url={item.image_url}
              is_selected={item.is_selected}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          extraData={extra}
        />
        <TouchableOpacity style={styles.touchablecontent}>
          <Text style={styles.contenttxt}>More Topics</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerbtn}>
          <Text style={styles.btnText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
