import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export const SplashScreen = (props) => {
  return (
    <View>
      <TouchableOpacity>
      <Text>Splash screen</Text>
      
      </TouchableOpacity>
      <Button title="Next"
        onPress={() => props.navigation.navigate('onbording')}/>
    </View>
  );
};
