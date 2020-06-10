var name = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passw = /(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;

export const Validation = (type, value, extravalue = '') => {
  switch (type) {
    case 'email':
      if (value.trim() != '') {
        if (reg.test(value) == true) {
          return null;
        } else {
          return 'Please Enter Valid email';
        }
      } else {
        return 'Blank email';
      }

    case 'password':
      if (value.trim() != '') {
        if (passw.test(value) == true) {
          return null;
        } else {
          return 'Must contain 8< incldsduding 1 capital,1 small,1 Digit, 1 special char';
        }
      } else {
        return 'Blank password';
      }

    case 'confirmpassword':
      if (value.trim() != '') {
        if (value.match(extravalue) && value.length == extravalue.length) {
          return null;
        } else {
          return 'Password does not match';
        }
      } else {
        return 'Blank Password';
      }

    case 'name':
      if (value.trim() != '') {
        if (name.test(value) == true) {
          return null;
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
