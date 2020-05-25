import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const OnbordingScreen = (props) => {
    return (
      <View>
        <Text>OnBording screen</Text>
        <Button title="Next"
        onPress={() => props.navigation.navigate('welcome')}/>
         {/* <Button title="Go back" onPress={() => navigation.goBack('')} /> */}
      </View>
    );
  }
