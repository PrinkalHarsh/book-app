import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Tooltip,
} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderBlock} from '@components';
import {Validation} from '@packages';

export const SigninScreen = props => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [textemail, settextemail] = useState(false);
  const [textpassword, settextpassword] = useState(false);

  const onPress = () => {
    var emailError = Validation('email', Email);
    var passwordError = Validation('password', Password);

    settextemail(false);
    if (emailError) {
      settextemail(emailError);
    }

    settextpassword(false);
    if (passwordError) {
      settextpassword(passwordError);
    }

    if (emailError == null && passwordError == null) {
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
              value={Email}
              onChangeText={email => setEmail(email)}
              onBlur={() => settextemail(Validation('email', Email))}
            />
            {textemail && <Text style={styles.error}> {textemail} </Text>}

            <TextInput
              style={styles.formTextInput}
              secureTextEntry={true}
              placeholder="Password"
              maxLength={16}
              value={Password}
              onChangeText={password => setPassword(password)}
              onBlur={() => settextpassword(Validation('password', Password))}
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
