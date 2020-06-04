import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

export const SigninScreen = props => {
  return (
    <SafeAreaView>
      <Text>sign in screen</Text>
      <Button
        title="Next"
        onPress={() => props.navigation.navigate('welcome')}
      />
    </SafeAreaView>
  );
};
