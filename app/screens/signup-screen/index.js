import React, {useState} from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Validation} from '@packages';
import styles from './style';
import {HeaderBlock} from '@components';

export const SignupScreen = props => {
  const [searchfullname, setSearchfullname] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPassword, setSearchPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [textfullname, settextfullname] = useState(false);
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);
  const [textconfirmpassword, settextconfirmpassword] = useState(false);

  const onPress = () => {
    settextfullname(false);
    var nameError = Validation('name', searchfullname);
    console.log('nameError,', nameError);
    if (nameError) {
      settextfullname(nameError);
    }

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
    settextfullname(false);
    var nameError = Validation('name', searchfullname);
    console.log('nameError,', nameError);
    if (nameError) {
      settextfullname(nameError);
    }

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

    settextconfirmpassword(false);
    var confirmpasswordError = Validation('confirmpassword', confirmPassword);
  };

  return (
    <View style={styles.container}>
      {/* Header Block */}
      <TouchableOpacity onPress={() => props.navigation.navigate('landing')}>
        <HeaderBlock />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.createaccountText}>Create Account</Text>
      </View>

      {/* content Block */}
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={styles.content}>
        <ScrollView style={styles.form}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Full Name"
            autoFocus={true}
            keyboardType="default"
            value={searchfullname}
            onChangeText={name => setSearchfullname(name)}
            onBlur={() => onBlur()}
          />
          {textfullname && <Text style={styles.error}> {textfullname} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Email"
            keyboardType="email-address"
            value={searchEmail}
            onChangeText={email => setSearchEmail(email)}
            onBlur={() => onBlur()}
          />
          {textemail && <Text style={styles.error}> {textemail} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Password"
            maxLength={16}
            value={searchPassword}
            onChangeText={password => setSearchPassword(password)}
            onBlur={() => onBlur()}
          />
          {textpassword && <Text style={styles.error}> {textpassword} </Text>}

          <TextInput
            style={styles.formTextInput}
            placeholder="Confirm Password"
            maxLength={16}
            value={confirmPassword}
            onChangeText={confirmpassword =>
              onChangeconfirmPassword(confirmpassword)
            }
            onBlur={() => onBlurconfirmPassword()}
          />
          {textconfirmpassword && (
            <Text style={styles.error}> Password Does't Match. </Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      {/* Fotter Block */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnsignup} onPress={() => onPress()}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
