# bs4-svelte-form-validation

It's a simple bs4 svelte form validation, that's a lot of things to do.
But you can test it out!

!["Showof"](https://i.imgur.com/gd01qc5.gif")

## Installation

`npm i bs4-svelte-form-validaion`

I recommend you to install with the latest tag since the project is in very early stage and get updated a lot.

`npm i bs4-svelte-form-validaion@latest`

## Importing

```javascript
import ValidatedField from "bs4-svelte-form-validation/ValidatedField.svelte";
import Validator from "bs4-svelte-form-validation/validator";
```

## Basic Syntax

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

> You need to pass an id to use the isValidated()
> function.

## Example

```html
<ValidatedField Type="text" id="username"
validator = {validator}
validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control"></ValidatedField>
```

## Custom Feedback messages

```javascript
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

> Take a look at defaultMessages.json

## Not showing feedback messages

You can choose if the valid or invalid feedback it's showed.

```html
<ValidatedField Class="form-control" Type="text" id="login" value="teste"
readonly validators={['required']} bind:value={teste} placeholder="teste"
showValidFeedback="false" showInvalidFeedback="false" />
```

## Events

Currently you can listen to three events

```html
on:changeValidated on:validated on:invalidated
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
validators={['required', 'strong-password']} bind:value={teste}
placeholder="Your password" showValidFeedback="false"
on:changeValidated={validate} on:validated={validated}
on:invalidated={invalidate} />
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
[&nbsp;&nbsp;&nbsp;] Add support to all html events <br>
[&nbsp;&nbsp;&nbsp;] Check for errors <br>
[&nbsp;&nbsp;&nbsp;] Improve the code <br>
[&nbsp;&nbsp;&nbsp;] Add new features

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
