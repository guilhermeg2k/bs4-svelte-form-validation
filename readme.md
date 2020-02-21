# bs4-svelte-form-validation

It's a simple bs4 svelte form validation, that's a lot of things to do.
But you can test it out!

!["Showof"](https://i.imgur.com/gd01qc5.gif")

## Installation

`npm i bs4-svelte-form-validation`

I recommend you to install with the latest tag since the project is in very early stage and get updated a lot.

`npm i bs4-svelte-form-validation@latest`

## Importing

Import as you need:

```javascript
import ValidatedField from "bs4-svelte-form-validation/ValidatedField.svelte";

import FieldGroup from "bs4-svelte-form-validation/FieldGroup.svelte";

import Validator from "bs4-svelte-form-validation/validator";
```

## Basic Syntax

> Always pass an id when using any component.

```html
<script>
  let validator = new Validator();
</script>
<ValidatedField
  Type="{type}"
  id="{id}"
  validator="{validator}"
  validators="{[{validators}]}"
  bind:value="{value}"
  Class="{Classes}"
></ValidatedField>
```

> Note that Type and Class are written with their fist letter on uppercase.

## Example

```html
<ValidatedField Type="text" id="username"
validator = {validator}
validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control"></ValidatedField>
```

## FieldGroup example

```html
<script>
  import ValidatedField from "./bs4/ValidatedField.svelte";
  import FieldGroup from "./bs4/FieldGroup.svelte";
  import Validator from "./bs4/validator.js";
  let user;
  let password;
  let validator = new Validator();
  let buttonValid = false;
</script>
  <FieldGroup
    id="group"
    {validator}
    on:valid={() => (buttonValid = true)}
    on:invalid={() => (buttonValid = false)}>
    <ValidatedField
      Class="form-control"
      Type="text"
      id="login"
      validators={['required', 'max:5']}
      bind:value={user}
      placeholder="Your username"
      {validator} />
    <ValidatedField
      Class="form-control"
      Type="password"
      id="password"
      validators={['required', 'strong-password']}
      bind:value={test2}
      placeholder="Your password"
      {validator} />
    <button disabled={!buttonValid}>LogIn</button>
  </FieldGroup>
```

## Custom Feedback messages

```html
<script>
    let msgs = {
    required: {
      invalid: "É necessário preencher esse campo.",
      valid: "Campo validado."
    }
  };
  let validator = new Validator(msgs);
</script>
<ValidatedField Type="text" id="username" validator = {validator} validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control" messages={msgs}></ValidatedField>
```

> Take a look at defaultMessages.js

## Not showing feedback messages

You can choose if the valid or invalid feedback it's showed.

```html
<ValidatedField Class="form-control" Type="text" id="login" value="test"
readonly validators={['required']} bind:value={test} placeholder="tes
showInvalidFeedback="false" />
```

## Events

#### DataField events

```html
on:changeValidation on:valid on:invalid
```

#### FieldGroup events

```html
on:changeValidation on:valid on:invalid
```

### Example

```html
<script>
  function validate(e) {
    alert(e.detail.text);
  }
  function invalidate(e) {
    alert(e.detail.text);
  }
  function validated(e) {
    alert(e.detail.text);
  }
</script>
<ValidatedField Class="form-control" Type="text" id="login"
validators={['required', 'strong-password']} bind:value={test} placeholder="Your
passwo on:changeValid={validate} on:valid={validated} on:invalid={invalidate} />
```

## Validators

|    Validator     |                                             Description                                             |                  How to                  |
| :--------------: | :-------------------------------------------------------------------------------------------------: | :--------------------------------------: |
|       min        |     Field minimum number of character or if it's a number or range the field the minimum value      |             min:{min-value}              |
|       max        |     Field maximum number of character or if it's a number or range the field the maximum value      |             max:{max-value}              |
|     required     |                                        The field is required                                        |                 required                 |
|   alphanumeric   |                       The field needs to contain only alphanumeric characters                       |               alphanumeric               |
|  weak password   |                       The field needs to contain at least 6 valid characters                        |              weak-password               |
| average password |            The field needs to contain at least 7 valid characters and one special simbol            |             average-password             |
| strong password  | The field needs to contain at least 8 valid characters, one special simbol and one uppercase letter |             strong-password              |
|      email       |                             The field needs to be a valid email format                              |                  email                   |
|      custom      |                                You specify a custom regex validator                                 | custom:{regex}:{valid-msg}:{invalid-msg} |

## Todo list

[ X ] Add all input types <br>
[ X ] Add all html input attributes <br>
[ X ] Add new types of validations <br>
[ X ] Add a event when the field is validated <br>
[ X ] Add support to group validation check <br>
[ X ] Add support to all html events <br>
[&nbsp;&nbsp;&nbsp;] Check for errors <br>
[&nbsp;&nbsp;&nbsp;] Improve the code <br>
[&nbsp;&nbsp;&nbsp;] Add new features

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
