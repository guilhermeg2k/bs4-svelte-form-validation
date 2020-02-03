import messages from "./defaultMessages";
export default class Validator {
  constructor(msgs) {
    this.validations = [];
    this.validate = validate;
    this.isValidated = isValidated;
    this.messages = messages;
    this.required = required;
    this.min = min;
    this.numberRequired = numberRequired;
  }
}
//TODO: Modulize this function
function validate(validators, value, id) {
  console.log(validators);
  for (let validator of validators) {
    let validation = {
      error: false,
      msg: this.messages.default.valid
    };
    if (validator.includes("min")) {
      let minValue = getValue(validator);
      validation = this.min(minValue, value);
      if (validation.error === true) {
        this.validations.id = false;
        return validation;
      }
      return validation;
    } else {
      switch (validator) {
        case "required":
          validation = this.required(value);
          if (validation.error === true) {
            this.validations.id = false;
            return validation;
          }
          break;
        case "number-required":
          validation = this.numberRequired(value);
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

function required(value) {
  if (value.length === 0) {
    return {
      error: true,
      msg: this.messages.required.invalid
    };
  } else
    return {
      error: false,
      msg: this.messages.required.valid
    };
}

function numberRequired(value) {
  if (value == 0 || !value) {
    return {
      error: true,
      msg: this.messages.numberRequired.invalid
    };
  } else
    return {
      error: false,
      msg: this.messages.numberRequired.valid
    };
}
function min(min, value) {
  if (value.length < min) {
    return {
      error: true,
      msg: this.messages.min.invalid
    };
  } else {
    return {
      error: false,
      msg: this.messages.min.valid
    };
  }
}