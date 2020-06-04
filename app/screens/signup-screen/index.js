import * as React from 'react';
import {View, Text, Button} from 'react-native';

export const SignupScreen = props => {
  return (
    <View>
      <Text>sign up screen</Text>
      <Button
        title="Next"
        onPress={() => props.navigation.navigate('signin')}
      />
    </View>
  );
};
