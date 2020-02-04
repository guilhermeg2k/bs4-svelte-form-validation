# bs4-svelte-form-validation

It's a simple bs4 svelte form validation, that's a lot of things to do.
But you can test it out!

## Installation

`npm i bs4-svelte-form-validation`

## Example of Usage

`<ValidatedField Type="{type}" id="{id}" validators={[{validators}]} bind:value={value} Class="{Classes}"></ValidatedField>`

| Atribute   |       Description       |                                            Values                                            |
| ---------- | :---------------------: | :------------------------------------------------------------------------------------------: |
| Type       |       Input type        |                         text; textarea; select; range; number; date;                         |
| id         |     html element id     |                                      any valid html id                                       |
| value      | variable bind reference |                                                                                              |
| Classes    |  html element classes   |                                     any valid css class                                      |
| Validators |    Field validators     | required, number-required; email; min:{N}; max:{N}; custom:{regex}:{valid-msg}:{invalid-msg} |

> Note that Type and Class are written with capitol "t".

> All HTML attributes are suppose to be working, if is not is gonna be added on future updates.

## Todo list

[&nbsp;&nbsp;&nbsp;] Add all input types <br>
[&nbsp;&nbsp;&nbsp;] Add all html input attributes <br>
[&nbsp;&nbsp;&nbsp;] Add new types of validations <br>
[&nbsp;&nbsp;&nbsp;] Check for errors

## License

[MIT](https://choosealicense.com/licenses/mit/)
