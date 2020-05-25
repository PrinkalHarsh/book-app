import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const WelcomeScreen = (props) => {
    return (
      <View>
        <Text>Welcome screen</Text>
        <Button title="Next"
        onPress={() => props.navigation.navigate('BottomTabs')}/>
       </View>
    );
  };

  