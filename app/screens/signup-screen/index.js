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
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.navigate('landing')}>
            <Image
              style={styles.image}
              source={Images.group}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.createaccountText}>Create Account</Text>
        </View>
      </View>

      {/* content Block */}
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.form}>
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
