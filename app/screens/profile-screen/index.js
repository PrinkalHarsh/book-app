import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const ProfileScreen = (props) => {
    return (
      <View>
        <Text>Profile screen</Text>
         <Button title="Go back" onPress={() => props.navigation.goBack('')} />
      </View>
    );
  }