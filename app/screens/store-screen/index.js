import * as React from 'react';
import { View, Text, Button } from 'react-native';


export const StoreScreen = (props) => {
    return (
      <View>
        <Text>Store screen</Text>
        <Button title="Next"
        onPress={() => props.navigation.navigate('profile')}/>
      </View>
    );
  }