import {useState} from 'react';

/**
 *custom create hooks for form input which takes form inputs and return values
 */
export const useFormInput = initialvalue => {
  const [value, setvalue] = useState(initialvalue);

  // On Text change
  const onChange = e => {
    setvalue(e);
  };

  return {
    value,
    onChangeText: onChange,
  };
};
