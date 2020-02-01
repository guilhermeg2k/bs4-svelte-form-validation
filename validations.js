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
      msg: `Este campo deve ter no mínimo ${min} caracteres`
    };
  } else {
    return {
      error: false
    };
  }
}
