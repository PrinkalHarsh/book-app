import validate from 'validate.js';

var constraints = {
  fullname: {
    presence: {allowEmpty: false},
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
    format: {
      pattern: '[a-zA-Z]+',
      message: 'Please enter valid password',
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
      message: 'Please enter valid password',
    },
  },
};

export const validator = (field, value) => {
  console.log(field, value);
  let object = new Object();
  object[field] = value;

  let constraint = new Object();
  constraint[field] = constraints[field];
  console.log(object, constraint);

  // Validate against the constraint and hold the error messages

  const result = validate(object, constraint);
  if (result) {
    console.log(result[field][0]);
    return result[field][0];
  }

  return null;
};
