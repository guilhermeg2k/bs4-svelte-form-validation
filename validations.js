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
    return {
      error: true,
      msg: this.messages.max.invalid
    };
  } else {
    return {
      error: false,
      msg: this.messages.max.valid
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
