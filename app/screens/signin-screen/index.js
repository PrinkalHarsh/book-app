import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {Images} from '@theme';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SigninScreen = props => {
  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Book Share</Text>
        </View>
      </View>

      {/* Content Block */}
      <View style={styles.content}>
        <SafeAreaView style={styles.content}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.navigate('landing')}>
            <Image style={styles.image} source={Images.group} />
          </TouchableOpacity>
          <ScrollView style={styles.form}>
            <Text style={styles.formText}>Welcome</Text>
            <Text style={styles.formText1}>Back</Text>

            <TextInput style={styles.formTextInput} placeholder="Email" />
            <TextInput style={styles.formTextInput} placeholder="Password" />
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
