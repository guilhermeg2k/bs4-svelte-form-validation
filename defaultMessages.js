let Messages;
export default Messages = {
  required: {
    invalid: "This field is required.",
    valid: "Field validated."
  },
  min: {
    invalid: "This field requires at least {value} characteres.",
    valid: "Field validated."
  },
  max: {
    invalid: "This field cannot be greater than {value} characteres.",
    valid: "Field validated."
  },
  numberRequired: {
    invalid: "This field is required.",
    valid: "Field validated"
  },
  email: {
    invalid: "Your email is invalid",
    valid: "Email validated."
  },
  password: {
    numberOfChars: "Your password must have at least {value} characters",
    specialKeys: "Your password must have at least one special character",
    capitalLetter: "Your password must have at least one uppercase letter",
    invalid: "Your password contain invalid characters.",
    valid: "Field validated."
  },
  alphanumeric: {
    invalid: "This field must contain just letters and numbers.",
    valid: "Field validated"
  },
  default: {
    invalid: "Field invalid",
    valid: "Field validated."
  }
};
