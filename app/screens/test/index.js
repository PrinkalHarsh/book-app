import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
import {validator} from '@packages';
import {useFormInput} from '@hooks';

export const test = () => {
  const name = useFormInput([]);
  const surname = useFormInput([]);
  const email = useFormInput([]);
  const password = useFormInput([]);
  const city = useFormInput([]);
  const [textname, settextname] = useState('');
  const [textsurname, settextsurname] = useState('');
  const [textemail, settextemail] = useState('');
  const [textpassword, settextpassword] = useState('');
  const [textcity, settextcity] = useState('');

  // On Press
  const onpress = () => {
    settextname(validator('name', name.value));
    settextsurname(validator('surname', surname.value));
    settextemail(validator('email', email.value));
    settextpassword(validator('password', password.value));
    settextcity(validator('city', city.value));
  };

  // On Blur
  const onblur = () => {
    settextname(validator('name', name.value));
    settextsurname(validator('surname', surname.value));
    settextemail(validator('email', email.value));
    settextpassword(validator('password', password.value));
    settextcity(validator('city', city.value));
  };

  /**
   *custom create hooks for header input which sets users inputs and return values
   */

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        {...name}
        placeholder="Name"
        onBlur={() => onblur()}
      />
      <Text style={styles.header}>{textname}</Text>
      <Text>Surname</Text>
      <TextInput
        style={styles.input}
        {...surname}
        placeholder="Surname"
        onBlur={() => onblur()}
      />
      <Text style={styles.header}>{textsurname}</Text>
      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        {...email}
        placeholder="E-mail"
        onBlur={() => onblur()}
      />
      <Text style={styles.header}>{textemail}</Text>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        {...password}
        placeholder="Password"
        secureTextEntry={true}
        onBlur={() => onblur()}
      />
      <Text style={styles.header}>{textpassword}</Text>
      <Text>City</Text>
      <TextInput
        style={styles.input}
        {...city}
        placeholder="City"
        onBlur={() => onblur()}
      />
      <Text style={styles.header}>{textcity}</Text>
      <TouchableOpacity onPress={() => onpress()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
