var name = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passw = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

export const Validation = (type, value) => {
  switch (type) {
    case 'email':
      if (value.trim() != '') {
        if (reg.test(value) == true) {
          return 'valid email';
        } else {
          return 'Please Enter Valid eamil';
        }
      } else {
        return 'Blank email';
      }

    case 'password':
      if (value.trim() != '') {
        if (passw.test(value) == true) {
          return 'valid password';
        } else {
          return 'Please Enter Valid password';
        }
      } else {
        return 'Blank password';
      }

    case 'name':
      if (value.trim() != '') {
        if (name.test(value) == true) {
          return 'valid Name';
        } else {
          return 'Please Enter Valid Name';
        }
      } else {
        return 'Blank Name';
      }

    default:
      return 'Both are invalid';
  }
};
