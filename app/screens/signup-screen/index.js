import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SignupScreen = props => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Book Share</Text>
      </View>

      {/* content Block */}
      <SafeAreaView style={styles.content}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => props.navigation.navigate('landing')}>
          <Image style={styles.image} source={Images.group} />
        </TouchableOpacity>
        <ScrollView style={styles.form}>
          <Text style={styles.formText}>Create Account</Text>
          <TextInput style={styles.formTextInput} placeholder="Full Name" />
          <TextInput style={styles.formTextInput} placeholder="Email" />
          <TextInput style={styles.formTextInput} placeholder="Password" />
          <TextInput
            style={styles.formTextInput}
            placeholder="Confirm Password"
          />
        </ScrollView>
      </SafeAreaView>

      {/* Fotter Block */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => props.navigation.navigate('welcome')}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
