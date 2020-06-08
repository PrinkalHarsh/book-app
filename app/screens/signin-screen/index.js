import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderBlock} from '@components';

export const SigninScreen = props => {
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPassword, setSearchPassword] = useState('');
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);

  const onChangeEmail = email => {
    setSearchEmail(email);
  };

  const onBlurEmail = () => {
    setSearchEmail(searchEmail);
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (searchEmail.trim() != '') {
      if (reg.test(searchEmail) == true) {
        settextemail(false);
      } else {
        settextemail(true);
      }
    }
  };

  const onChangePassword = password => {
    setSearchPassword(password);
  };

  const onBlurPassword = () => {
    setSearchPassword(searchPassword);
    var passw = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    if (searchPassword.trim() != '') {
      // console.log('valid password format');
      if (passw.test(searchPassword) == true) {
        settextpassword(false);
      } else {
        settextpassword(true);
      }
    }
  };

  const onPress = () => {
    setSearchEmail(searchEmail);
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    if (reg.test(searchEmail) == true && passw.test(searchPassword) == true) {
      props.navigation.navigate('welcome');
    } else {
      if (reg.test(searchEmail) == false) {
        settextemail(true);
      }
      if (passw.test(searchPassword) == false) {
        settextpassword(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Block */}
      <TouchableOpacity onPress={() => props.navigation.navigate('landing')}>
        <HeaderBlock />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.signinText}>Sign In</Text>
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
              onChangeText={email => onChangeEmail(email)}
              onBlur={() => onBlurEmail()}
            />
            {textemail && (
              <Text style={styles.error}> Please Enter Valid Email Id. </Text>
            )}
            <TextInput
              style={styles.formTextInput}
              secureTextEntry={true}
              placeholder="Password"
              maxLength={16}
              value={searchPassword}
              onChangeText={password => onChangePassword(password)}
              onBlur={() => onBlurPassword()}
            />
            {textpassword && (
              <Text style={styles.error}>Please Enter Valid Password. </Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>

      {/* Footer Block */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnsignup}
          // onPress={() => props.navigation.navigate('welcome')}
          onPress={() => onPress()}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
