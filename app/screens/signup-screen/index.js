import React, {useState} from 'react';
import {View, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Validation} from '@packages';
import styles from './style';
import {HeaderBlock} from '@components';

export const SignupScreen = props => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [textfullname, settextfullname] = useState(false);
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);
  const [textconfirmpassword, settextconfirmpassword] = useState(false);

  const onPress = () => {
    // settextfullname(false);
    var nameError = Validation('name', Fullname);
    var emailError = Validation('email', Email);
    var passwordError = Validation('password', Password);
    var confirmpasswordError = Validation(
      'confirmpassword',
      confirmPassword,
      Password,
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
            value={Fullname}
            onChangeText={name => setFullname(name)}
            onBlur={() => settextfullname(Validation('name', Fullname))}
          />
          {textfullname && <Text style={styles.error}> {textfullname} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Email"
            keyboardType="email-address"
            value={Email}
            onChangeText={email => setEmail(email)}
            onBlur={() => settextemail(Validation('email', Email))}
          />
          {textemail && <Text style={styles.error}> {textemail} </Text>}
          <TextInput
            style={styles.formTextInput}
            placeholder="Password"
            secureTextEntry={true}
            maxLength={25}
            value={Password}
            onChangeText={password => setPassword(password)}
            onBlur={() => settextpassword(Validation('password', Password))}
          />
          {textpassword && <Text style={styles.error}> {textpassword} </Text>}

          <TextInput
            style={styles.formTextInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            maxLength={25}
            value={confirmPassword}
            onChangeText={confirmpassword =>
              setConfirmPassword(confirmpassword)
            }
            onBlur={() =>
              settextconfirmpassword(
                Validation('confirmpassword', confirmPassword, Password),
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
