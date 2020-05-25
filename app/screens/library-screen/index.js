import * as React from 'react';
import { View, Text, Button } from 'react-native';


export const LibraryScreen = (props) => {
    return (
      <View>
        <Text>library screen</Text>
        <Button title="Next"
        onPress={() => props.navigation.navigate('store')}/>
      </View>
    );
  }