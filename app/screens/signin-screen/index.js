import React, {useState} from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderBlock} from '@components';
import {Validation} from '@packages';

export const SigninScreen = props => {
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPassword, setSearchPassword] = useState('');
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);

  const onPress = () => {
    settextemail(false);
    var emailError = Validation('email', searchEmail);
    console.log('emailError,', emailError);
    if (emailError) {
      settextemail(emailError);
    }

    settextpassword(false);
    var passwordError = Validation('password', searchPassword);
    console.log('passwordError,', passwordError);
    if (passwordError) {
      settextpassword(passwordError);
    }
  };

  const onBlur = () => {
    settextemail(false);
    var emailError = Validation('email', searchEmail);
    console.log('emailError,', emailError);
    if (emailError) {
      settextemail(emailError);
    }

    settextpassword(false);
    var passwordError = Validation('password', searchPassword);
    console.log('passwordError,', passwordError);
    if (passwordError) {
      settextpassword(passwordError);
    }
  };
  //   settextpassword(false);
  //   var passwordError = Validation('password', searchPassword);
  //   console.log('passwordError,', passwordError);
  //   if (passwordError) {
  //     settextpassword(passwordError);
  //   }
  // };

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
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={styles.content}>
        <SafeAreaView style={styles.content}>
          <ScrollView style={styles.form}>
            <TextInput
              style={styles.formTextInput}
              maxLength={40}
              placeholder="Email"
              autoFocus={true}
              keyboardType="email-address"
              value={searchEmail}
              onChangeText={email => setSearchEmail(email)}
              onBlur={() => onBlur()}
            />
            {textemail && <Text style={styles.error}> {textemail} </Text>}
            <TextInput
              style={styles.formTextInput}
              secureTextEntry={true}
              placeholder="Password"
              maxLength={16}
              value={searchPassword}
              onChangeText={password => setSearchPassword(password)}
              onBlur={() => onBlur()}
            />
            {textpassword && <Text style={styles.error}> {textpassword} </Text>}
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>

      {/* Footer Block */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnsignup} onPress={() => onPress()}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
