import { required, numberRequired, min } from "./validations";
import messages from "./defaultMessages";
export default class Validator {
  constructor(msgs) {
    this.validations = [];
    this.validate = validate;
    this.isValidated = isValidated;
    if (messages != undefined) {
      this.messages = msgs;
    } else {
      this.messages = messages;
    }
  }
}
//TODO: Modulize this function
function validate(validators, value, id) {
  for (let validator of validators) {
    let validation = {
      error: false,
      msg: this.messages.default.valid
    };
    if (validation.includes("min")) {
      let minValue = getValue(validation);
      validation = min(minValue, value);
      if (validation.error === true) {
        this.validations.id = false;
        return validation;
      }
    } else {
      switch (validator) {
        case "required":
          validation = required(value);
          if (validation.error === true) {
            this.validations.id = false;
            return validation;
          }
        case "number-required":
          validation = numberRequired(value);
          if (validation.error === true) {
            this.validations.id = false;
            return validation;
          }
        default:
          this.validations.id = true;
          return validation;
      }
    }
  }
}

function isValidated(ids) {
  if (typeof ids === number) {
    return this.validations.ids;
  }
  for (let id of ids) {
    if (this.validations.id === false) {
      return false;
    }
  }
  return true;
}

function getValue(str) {
  return str.split(":")[1];
}
