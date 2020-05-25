import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const DiscoverScreen = (props) => {
    return (
      <View>
        <Text>Discover screen</Text>
        <Button title="Next"
        onPress={() => props.navigation.navigate('library')}/>
      </View>
    );
  }