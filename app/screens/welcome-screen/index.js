import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Image, Linking} from 'react-native';
import {Images} from '@theme';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DATA} from '@json';

function Item({title, image_url, is_selected, onPress}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={image_url} />
        {is_selected && (
          <View style={styles.test}>
            <Image source={Images.pink} />
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.itemtxt}>{title}</Text>
    </View>
  );
}

export const WelcomeScreen = props => {
  const [topics, setTopics] = useState(DATA);

  const onPress = index => {
    console.log(topics[index]);
  };

  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headertext}>Welcome {'\n'} Choose the topics</Text>
      </View>
      {/* <Text onPress={() => settopics(DATA)}> Set Data</Text> */}
      {/* <Text onPress={() => settopics()}> Empty Data</Text> */}
      {/* Content Block */}
      <View style={styles.content}>
        <FlatList
          numColumns={3}
          data={topics}
          renderItem={({item, index}) => (
            <Item
              onPress={() => onPress(index)}
              title={item.title}
              image_url={item.image_url}
              is_selected={item.is_selected}
            />
          )}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity style={styles.touchablecontent}>
          <Text
            style={styles.contenttxt}
            onPress={() => Linking.openURL('https://google.com')}>
            More Topics
          </Text>
        </TouchableOpacity>
      </View>
      {/* Footer Block */}
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.btnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};
