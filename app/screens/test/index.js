import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './style';
import {HeaderTitle} from '@react-navigation/stack';

export const test = () => {
  /**
   *custom create hooks for form input which takes form inputs and return values
   */
  const useFormInput = initialvalue => {
    const [value, setvalue] = useState(initialvalue);
    const onChange = e => {
      setvalue(e);
    };

    return {
      value,
      onChangeText: onChange,
    };
  };

  const name = useFormInput('Mary');
  const surname = useFormInput('za');
  const [header, setheader] = useState([]);

  /**
   *custom create hooks for header input which sets users inputs and return values
   */

  useDocumentTitle(name.value + ' ' + surname.value);

  function useDocumentTitle(Title) {
    useEffect(() => {
      setheader(Title);
    });
  }
  return (
    <View style={styles.container}>
      <TextInput> {header} </TextInput>
      <Text>name</Text>
      <TextInput {...name} />
      <Text>surname</Text>
      <TextInput {...surname} />
    </View>
  );
};
