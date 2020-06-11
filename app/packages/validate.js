import validate from 'validate.js';
import {isEmpty} from 'lodash';
var constraints = {
  fullname: {
    presence: {allowEmpty: false},
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
    format: {
      pattern: '[a-zA-Z ]+',
      message: 'Please enter valid Name',
    },
  },
  email: {
    presence: {allowEmpty: false},
    email: true,
  },
  password: {
    presence: {allowEmpty: false},
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
    format: {
      pattern: '[a-z0-9A-Z]+',
      message: 'is not valid ',
    },
  },
  confirmpassword: {
    presence: {allowEmpty: false},
    equality: {
      attribute: 'password',
    },
  },
};

export const validator = (field, value, extra = {}) => {
  console.log(field, value);
  let object = new Object();

  object[field] = value;
  console.log('thisi s first', object);

  if (!isEmpty(extra)) {
    let tempkey = Object.keys(extra);
    let tmpKeyValue = tempkey[0];
    let tempvalue = Object.values(extra);
    let tmpValue = tempvalue[0];
    object[tmpKeyValue] = tmpValue;
    console.log('this is final object with confirm password', object);
  }

  console.log('this is forgot password', object, extra);

  let constraint = new Object();
  constraint[field] = constraints[field];
  console.log('object, constraint', object, constraint);

  // Validate against the constraint and hold the error messages

  const result = validate(object, constraint);
  if (result) {
    console.log(result[field][0]);
    return result[field][0];
  }

  return null;
};
