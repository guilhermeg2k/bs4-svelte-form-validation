import messages from "./defaultMessages";
import {
  required,
  numberRequired,
  min,
  email,
  max,
  alphanumeric,
  weakPassword,
  averagePassword,
  strongPassword,
  custom
} from "./validations";

export default class Validator {
  constructor(msgs) {
    this.validations = [];
    this.validate = validate;
    this.messages = messages;
    this.required = required;
    this.min = min;
    this.numberRequired = numberRequired;
    this.email = email;
    this.max = max;
    this.weakPassword = weakPassword;
    this.alphanumeric = alphanumeric;
    this.strongPassword = strongPassword;
    this.weakPassword = weakPassword;
    this.averagePassword = averagePassword;
    this.custom = custom;
    this.isValidated = isValidated;
    if (msgs != undefined) {
      this.messages = { ...this.messages, ...msgs };
    }
  }
}
function validate(validators, value, id) {
  let validation = {
    error: false,
    msg: this.messages.default.valid
  };
  for (let validator of validators) {
    if (validator.includes("min")) {
      let minValue = getValue(validator);
      validation = this.min(minValue, value);
    } else if (validator.includes("max")) {
      let maxValue = getValue(validator);
      validation = this.max(maxValue, value);
    } else if (validator === "number-required") {
      validation = this.numberRequired(value);
    } else if (validator.includes("custom")) {
      let custom = getCustom(validator);
      validation = this.custom(custom, value);
    } else if (validator === "required") {
      validation = this.required(value);
    } else if (validator === "email") {
      validation = this.email(value);
    } else if (validator === "alphanumeric") {
      validation = this.alphanumeric(value);
    } else if (validator === "weak-password") {
      validation = this.weakPassword(value);
    } else if (validator === "average-password") {
      validation = this.averagePassword(value);
    } else if (validator === "strong-password") {
      validation = this.strongPassword(value);
    }
    if (validation.error === true) {
      this.validations[id] = false;
      return validation;
    }
  }
  this.validations[id] = true;
  return validation;
}

export function isValidated(ids) {
  if (typeof ids === String) {
    if (this.validations[ids] === undefined) {
      return false;
    }
    return this.validations[ids];
  }
  for (let id of ids) {
    if (this.validations[id] === false) {
      return false;
    }
  }
  return true;
}

function getValue(validator) {
  return validator.split(":")[1];
}

function getCustom(validator) {
  let splitedValidator = validator.split(":");
  let custom = {
    regex: splitedValidator[1],
    msg: {
      valid: splitedValidator[2],
      invalid: splitedValidator[3]
    }
  };
  return custom;
}
