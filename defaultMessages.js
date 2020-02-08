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
    specialKeys:
      "Your password must have at least {value} special character(s)",
    capitalLetter:
      "Your password must have at least {value} uppercase letter(s)",
    valid: "field validated."
  },
  default: {
    invalid: "Field invalid",
    valid: "Field validated."
  }
};
