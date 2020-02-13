# bs4-svelte-form-validation

It's a simple bs4 svelte form validation, that's a lot of things to do.
But you can test it out!

!["Showof"](https://i.imgur.com/gd01qc5.gif")

## Installation

`npm i bs4-svelte-form-validation`

## Importing

```javascript
import ValidatedField from "bs4-svelte-form-validation/ValidatedField.svelte";
```

## Basic Syntax

```html
<ValidatedField
  Type="{type}"
  id="{id}"
  validators="{[{validators}]}"
  bind:value="{value}"
  Class="{Classes}"
></ValidatedField>
```

> Note that Type and Class are written with their fist letter on uppercase.

> All HTML attributes are suppose to be working.

## Example

```html
<ValidatedField Type="text" id="username" validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control"></ValidatedField>
```

## Custom Feedback messages

You can pass custom messages through the component. <br>

```javascript
<script>
    let msgs = {
    required: {
      invalid: "É necessário preencher esse campo.",
      valid: "Campo validado."
    }
  };
</script>
<ValidatedField Type="text" id="username" validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control" messages={msgs}></ValidatedField>
```

> Take a look at defaultMessages.json

## Not showing feedback messages

You can chose if the valid or invalid feedback is showed

```html
<ValidatedField Class="form-control" Type="text" id="login" value="teste"
readonly validators={['required']} bind:value={teste} placeholder="teste"
showValidFeedback="false" showInvalidFeedback="false" />
```

## Validators

|    Validator     |                                             Description                                             |              How to               |
| :--------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------: |
|       min        |     Field minimum number of character or if it's a number or range the field the minimum value      |          min:{min-value}          |
|       max        |     Field maximum number of character or if it's a number or range the field the maximum value      |          max:{max-value}          |
|     required     |                                        The field is required                                        |             required              |
|   alphanumeric   |                       The field needs to contain only alphanumeric characters                       |           alphanumeric            |
|  weak password   |                       The field needs to contain at least 6 valid characters                        |           weak-password           |
| average password |            The field needs to contain at least 7 valid characters and one special simbol            |         average-password          |
| strong password  | The field needs to contain at least 8 valid characters, one special simbol and one uppercase letter |          strong-password          |
|      email       |                             The field needs to be a valid email format                              |               email               |
|      custom      |                                You specify a custom regex validator                                 | {regex}:{valid-msg}:{invalid-msg} |

## Todo list

[ X ] Add all input types <br>
[ X ] Add all html input attributes <br>
[ X ] Add new types of validations <br>
[&nbsp;&nbsp;&nbsp;] Add a event when the field is validated<br>
[&nbsp;&nbsp;&nbsp;] Check for errors

## License

[MIT](https://choosealicense.com/licenses/mit/)

```

```
