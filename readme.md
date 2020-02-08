# bs4-svelte-form-validation

It's a simple bs4 svelte form validation, that's a lot of things to do.
But you can test it out!

## Installation

`npm i bs4-svelte-form-validation`

## Importing

`import ValidatedField from "bs4-svelte-form-validation/ValidatedField.svelte";`

## Basic Syntax

`<ValidatedField Type="{type}" id="{id}" validators={[{validators}]} bind:value={value} Class="{Classes}"></ValidatedField>`

> Note that Type and Class are written with their fist letter on uppercase.

> All HTML attributes are suppose to be working.

## Example

`<ValidatedField Type="text" id="username" validators={['required', 'min:5', 'max:15']} bind:value={name} Class="form-control"></ValidatedField>`

## Validators

| Validator |                                        Description                                         |              How to               |
| :-------: | :----------------------------------------------------------------------------------------: | :-------------------------------: |
|    min    | Field minimum number of character or if it's a number or range the field the minimum value |          min:{min-value}          |
|    max    | Field maximum number of character or if it's a number or range the field the maximum value |          max:{max-value}          |
| required  |                                   The field is required                                    |             required              |
|   email   |                         The field needs to be a valid email format                         |               email               |
|  custom   |                            You specify a custom regex validator                            | {regex}:{valid-msg}:{invalid-msg} |

## Todo list

[ X ] Add all input types <br>
[ X ] Add all html input attributes <br>
[&nbsp;&nbsp;&nbsp;] Add new types of validations <br>
[&nbsp;&nbsp;&nbsp;] Add a event when the field is validated<br>
[&nbsp;&nbsp;&nbsp;] Check for errors

## License

[MIT](https://choosealicense.com/licenses/mit/)
