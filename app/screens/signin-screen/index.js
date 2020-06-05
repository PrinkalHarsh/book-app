import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SigninScreen = props => {
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPassword, setSearchPassword] = useState('');

  const onBlurEmail = email => {
    setSearchEmail(email);
    // var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // // console.log(email);

    // if (reg.test(email) == true) {
    //   console.log('Valid Email');
    // } else {
    //   console.log('Please Enter valid Email');
    // }

    if (email != '') {
      console.log('Invalid Email');
    } else {
      console.log('Please Enter valid Email');
    }
  };

  const onBlurPassword = password => {
    setSearchPassword(password);
    var passw = /^[A-Za-z]\w{7,14}$/;
    // console.log(password);
    if (password.trim != '') {
      if (passw.test(password) == true) {
        console.log('Valid Password');
      }
    } else {
      console.log('Please Enter valid Password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.navigate('landing')}>
            <Image style={styles.image} source={Images.group} />
          </TouchableOpacity>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.signinText}>Sign In</Text>
        </View>
      </View>

      {/* Content Block */}
      <View style={styles.content}>
        <SafeAreaView style={styles.content}>
          <ScrollView style={styles.form}>
            <TextInput
              style={styles.formTextInput}
              maxLength={30}
              placeholder="Email"
              autoFocus={true}
              keyboardType="email-address"
              value={searchEmail}
              onBlur={searchEmail => onBlurEmail(searchEmail)}
            />
            <TextInput
              style={styles.formTextInput}
              secureTextEntry={true}
              placeholder="Password"
              maxLength={16}
              value={searchPassword}
              onBlur={password => onBlurPassword(password)}
            />
          </ScrollView>
        </SafeAreaView>
      </View>

      {/* Footer Block */}
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
