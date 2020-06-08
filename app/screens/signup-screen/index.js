import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
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

  const onChangeFullname = text => {
    setSearchfullname(text);
  };

  const onBlurFullname = () => {
    setSearchfullname(searchfullname);
    // var reg = /^[a-zA-Z ]*$/;
    var reg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;

    if (searchfullname.trim != '') {
      if (reg.test(searchfullname) == true) {
        settextfullname(false);
      } else {
        settextfullname(true);
      }
    } else {
      settextfullname(true);
    }
  };

  const onChangeEmail = email => {
    setSearchEmail(email);
  };

  const onBlurEmail = () => {
    setSearchEmail(searchEmail);
    var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (searchEmail.trim() != '') {
      if (regemail.test(searchEmail) == true) {
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
      if (passw.test(searchPassword) == true) {
        settextpassword(false);
      } else {
        settextpassword(true);
      }
    }
  };

  const onChangeconfirmPassword = confirmpassword => {
    setConfirmPassword(confirmpassword);
  };

  const onBlurconfirmPassword = () => {
    setConfirmPassword(confirmPassword);

    if (
      confirmPassword.match(searchPassword) &&
      confirmPassword.length == searchPassword.length
    ) {
      settextconfirmpassword(false);
    } else {
      settextconfirmpassword(true);
    }
  };

  const onPress = () => {
    var reg = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passw = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
    if (
      reg.test(searchfullname) == true &&
      regemail.test(searchEmail) == true &&
      passw.test(searchPassword) == true &&
      confirmPassword.match(searchPassword) &&
      confirmPassword.length == searchPassword.length
    ) {
      props.navigation.navigate('welcome');
    } else {
      if (reg.test(searchfullname) == false) {
        settextfullname(true);
      }
      if (regemail.test(searchEmail) == false) {
        settextemail(true);
      }
      if (passw.test(searchPassword) == false) {
        settextpassword(true);
      }
      if (
        confirmPassword.match(searchPassword) &&
        confirmPassword.length == searchPassword.length
      ) {
        settextconfirmpassword(false);
      } else {
        settextconfirmpassword(true);
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
        <Text style={styles.createaccountText}>Create Account</Text>
      </View>

      {/* content Block */}
      <SafeAreaView style={styles.content}>
        <ScrollView style={styles.form}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Full Name"
            autoFocus={true}
            keyboardType="default"
            value={searchfullname}
            onChangeText={text => onChangeFullname(text)}
            onBlur={() => onBlurFullname()}
          />
          {textfullname && (
            <Text style={styles.error}> Please Enter Valid Name. </Text>
          )}
          <TextInput
            style={styles.formTextInput}
            placeholder="Email"
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
            placeholder="Password"
            maxLength={16}
            value={searchPassword}
            onChangeText={password => onChangePassword(password)}
            onBlur={() => onBlurPassword()}
          />
          {textpassword && (
            <Text style={styles.error}> Please Enter Valid Password. </Text>
          )}
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
      </SafeAreaView>

      {/* Fotter Block */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnsignup} onPress={() => onPress()}>
          <Text style={styles.btnsignupText}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
