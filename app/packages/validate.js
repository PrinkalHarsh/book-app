import validate from 'validate.js';

var constraints = {
  username: {
    presence: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
};

export const validate = () => {
  validate.single(null, {presence: true, email: true});
};
