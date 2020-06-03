import React, {useState, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {DATA} from '@json';
import {BooksCategory} from '@components';

export const WelcomeScreen = props => {
  const [topics, setTopics] = useState(DATA);
  const [extra, setextra] = useState(0);
  // const [postCount, setpostCount] = useState(9);
  // const [enableButton, setEnableButton] = useState(true);
  const flatListRef = useRef();
  const [searchText, setSearchText] = useState('');

  const onPress = index => {
    var cnt = 0;
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].id == topics[index].id) {
        topics[i].is_selected = !topics[i].is_selected;
      }
      if (topics[i].is_selected == true) {
        cnt++;
        if (cnt > 3) {
          topics[index].is_selected = false;
          alert('only Three books selected');
        }
      }
    }
    setTopics(topics);
    setextra(extra + 1);
  };

  const onChangeText = e => {
    setSearchText(e);
    if (e.trim() != '') {
      var mySearchedText = e.toUpperCase();
      var filteredData = DATA.filter(item => {
        return (
          item.title.toUpperCase().match(mySearchedText) ||
          item.category.toUpperCase().match(mySearchedText)
        );
      });
      setTopics(filteredData);
    } else {
      setTopics(DATA);
    }
  };

  const onPressFilter = category => {
    setTopics(
      DATA.filter(
        DATA =>
          DATA.category == category &&
          DATA.title.toUpperCase().match(searchText),
      ),
    );
    topics.filter(ele => (ele.is_selected = false));
  };

  return (
    // Main Content Block
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.headerText}>Choose the topics</Text>
      </View>
      <View>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 2}}
          onChangeText={text => onChangeText(text)}
          placeholder="search"
          value={searchText}
        />
      </View>
      <View style={styles.category}>
        <Text
          style={styles.categoryText}
          onPress={() => {
            // setTopics(DATA);
            setTopics(
              DATA.filter(DATA => DATA.title.toUpperCase().match(searchText)),
            );
            topics.filter(ele => (ele.is_selected = false));
          }}>
          All
        </Text>
        <Text
          style={styles.categoryText}
          onPress={() => {
            onPressFilter('GJ');
          }}>
          GJ
        </Text>
        <Text
          style={styles.categoryText}
          onPress={() => {
            onPressFilter('MH');
          }}>
          MH
        </Text>
        <Text
          style={styles.categoryText}
          onPress={() => {
            onPressFilter('RJ');
          }}>
          RJ
        </Text>
        <Text
          style={styles.categoryText}
          onPress={() => {
            onPressFilter('DL');
          }}>
          DL
        </Text>
      </View>

      {/* content Block */}
      <View style={styles.MainContainer}>
        <FlatList
          ref={flatListRef}
          data={topics}
          renderItem={({item, index}) => (
            <BooksCategory
              onPress={() => onPress(index)}
              id={item.id}
              title={item.title}
              image_url={item.image_url}
              is_selected={item.is_selected}
              category={item.category}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          extraData={extra}
        />
        {/* {enableButton && (
          <Text
            style={styles.contenttxt}
            onPress={() => {
              setTopics(DATA.filter(DATA => DATA.id < postCount + 3));
              setpostCount(postCount + 3);
              if (DATA.length == postCount + 3) {
                setEnableButton(false);
              }
            }}>
            More Topics
          </Text>
        )} */}
      </View>

      {/* Footer Block */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerbtn}>
          <Text style={styles.btnText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
