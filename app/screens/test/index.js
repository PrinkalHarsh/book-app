import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import {validator} from '@packages';
import {useFormInput} from '@hooks';

export const test = () => {
  const name = useFormInput('');
  const surname = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const city = useFormInput('');
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

  /**
   *custom create hooks for header input which sets users inputs and return values
   */

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        {...name}
        style={styles.input}
        placeholder="Name"
        onBlur={() => settextname(validator('name', name.value))}
      />
      <Text style={styles.header}>{textname}</Text>
      <Text>Surname</Text>
      <TextInput
        style={styles.input}
        {...surname}
        placeholder="Surname"
        onBlur={() => settextsurname(validator('surname', surname.value))}
      />
      <Text style={styles.header}>{textsurname}</Text>
      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        {...email}
        placeholder="E-mail"
        onBlur={() => settextemail(validator('email', email.value))}
      />
      <Text style={styles.header}>{textemail}</Text>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        {...password}
        placeholder="Password"
        secureTextEntry={true}
        onBlur={() => settextpassword(validator('password', password.value))}
      />
      <Text style={styles.header}>{textpassword}</Text>
      <Text>City</Text>
      <TextInput
        style={styles.input}
        {...city}
        placeholder="City"
        onBlur={() => settextcity(validator('city', city.value))}
      />
      <Text style={styles.header}>{textcity}</Text>
      <TouchableOpacity onPress={() => onpress()}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
