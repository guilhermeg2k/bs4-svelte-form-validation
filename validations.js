export function required(value) {
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

export function numberRequired(value) {
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
export function min(min, value) {
  if (value.length < min) {
    let validation = {
      error: true,
      msg: this.messages.min.invalid
    };
    validation.msg = validation.msg.replace("{value}", min);
    return validation;
  } else {
    return {
      error: false,
      msg: this.messages.min.valid
    };
  }
}

export function email(value) {
  let re = new RegExp("^[\\w+\\.]+@\\w+\\.\\w+[\\w+\\.]+$");
  if (re.test(value)) {
    return {
      error: false,
      msg: this.messages.email.valid
    };
  } else {
    return {
      error: true,
      msg: this.messages.email.invalid
    };
  }
}

export function max(max, value) {
  if (value.length > max) {
    let validation = {
      error: true,
      msg: this.messages.max.invalid
    };
    validation.msg = validation.msg.replace("{value}", max);
    return validation;
  } else {
    return {
      error: false,
      msg: this.messages.max.valid
    };
  }
}

export function alphanumeric(value) {
  let re = new RegExp("^[A-Za-z0-9]*$");
  if (re.test(value)) {
    return {
      error: false,
      msg: this.messages.alphanumeric.valid
    };
  } else {
    return {
      error: true,
      msg: this.messages.alphanumeric.invalid
    };
  }
}
export function weakPassword(value, min = 6) {
  let re = new RegExp("^[A-Za-z0-9!\"#$%&'()*+,./:;<=>?@^_`{|}~-]*$");
  let validation = this.min(min, value);
  console.log(validation);
  if (validation.error === true) {
    validation.msg = this.messages.password.numberOfChars;
    validation.msg = validation.msg.replace("{value}", min);
    return validation;
  }
  if (re.test(value)) {
    return {
      error: false,
      msg: this.messages.password.valid
    };
  } else {
    return {
      error: true,
      msg: this.messages.password.invalid
    };
  }
}

export function averagePassword(value, min = 7) {
  let validation = this.weakPassword(value, min);
  if (validation.error === true) {
    return validation;
  }
  let re = new RegExp("[!\"#$%&'()*+,./:;<=>?@^_`{|}~-]");
  if (re.test(value)) {
    return {
      error: false,
      msg: this.messages.password.valid
    };
  } else {
    return {
      error: true,
      msg: this.messages.password.specialKeys
    };
  }
}

export function strongPassword(value, min = 8) {
  let validation = this.averagePassword(value, min);
  if (validation.error === true) {
    return validation;
  }
  let re = new RegExp("[A-Z]");
  if (re.test(value)) {
    return {
      error: false,
      msg: this.messages.password.valid
    };
  } else {
    return {
      error: true,
      msg: this.messages.password.capitalLetter
    };
  }
}

export function custom(custom, value) {
  let re = new RegExp(custom.regex);
  if (re.test(value)) {
    return {
      error: false,
      msg: custom.msg.invalid
    };
  } else {
    return {
      error: true,
      msg: custom.msg.invalid
    };
  }
}
