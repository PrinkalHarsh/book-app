import React, {useState} from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {validator} from '@packages';
import styles from './style';
import {HeaderBlock} from '@components';

export const SignupScreen = props => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [textfullname, settextfullname] = useState(false);
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);
  const [textconfirmpassword, settextconfirmpassword] = useState(false);

  const onPress = () => {
    var nameError = validator('fullname', fullname);
    var emailError = validator('email', email);
    var passwordError = validator('password', password);
    var confirmpasswordError = validator(
      'confirmpassword',
      confirmpassword,
      password,
    );

    settextfullname(nameError);
    settextemail(emailError);
    settextpassword(passwordError);
    settextconfirmpassword(confirmpasswordError);

    if (nameError || emailError || passwordError || confirmpasswordError) {
      return false;
    } else {
      props.navigation.navigate('welcome');
    }
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
        behavior={Platform.OS == 'ios' ? 'padding' : 'Height'}
        keyboardVerticalOffset={0}
        enableAutomaticScroll
        style={styles.content}>
        <ScrollView style={styles.form}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Full Name"
            autoFocus={true}
            keyboardType="default"
            value={fullname}
            onChangeText={name => setFullname(name)}
            onBlur={() => settextfullname(validator('name', fullname))}
          />
          {textfullname && <Text style={styles.error}> {textfullname} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={email => setEmail(email)}
            onBlur={() => settextemail(validator('email', email))}
          />
          {textemail && <Text style={styles.error}> {textemail} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Password"
            secureTextEntry={true}
            maxLength={25}
            value={password}
            onChangeText={password => setPassword(password)}
            onBlur={() => settextpassword(validator('password', password))}
          />
          {textpassword && <Text style={styles.error}> {textpassword} </Text>}

          <TextInput
            style={styles.formTextInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            maxLength={25}
            value={confirmpassword}
            onChangeText={confirmpassword =>
              setConfirmPassword(confirmpassword)
            }
            onBlur={() =>
              settextconfirmpassword(
                validator('confirmpassword', confirmpassword, password),
              )
            }
          />
          {textconfirmpassword && (
            <Text style={styles.error}> {textconfirmpassword} </Text>
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
