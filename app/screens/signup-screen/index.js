import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';

export const SignupScreen = props => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => props.navigation.navigate('landing')}>
          <Text style={styles.backText}> Back </Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <Text style={styles.formText}>Create Account</Text>
          <TextInput style={styles.formTextInput} placeholder="Full Name" />
          <TextInput style={styles.formTextInput} placeholder="Email" />
          <TextInput style={styles.formTextInput} placeholder="Password" />
          <TextInput
            style={styles.formTextInput}
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
