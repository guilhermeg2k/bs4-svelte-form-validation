<script>
  import Validator from "./validator.js";
  export let value = "";
  export let id = null;
  export let placeholder = null;
  export let Class = null;
  export let validators = null;
  export let Type = null;
  export let min = null;
  export let max = null;
  export let rows = null;
  export let cols = null;
  export let name = null;
  export let maxlength = null;
  export let accept = null;
  export let autocomplete = null;
  export let checked = null;
  export let dirname = null;
  export let disabled = null;
  export let list = null;
  export let form = null;
  export let multiple = null;
  export let pattern = null;
  export let required = null;
  export let readonly = null;
  export let size = null;
  export let step = null;
  export let wrap = null;
  export let showValidFeedback = "true";
  export let showInvalidFeedback = "true";
  export let messages = null;
  let msg = "";
  let validated = null;
  let validation = null;
  let validator = new Validator();
  if (messages) {
    validator = new Validator(messages);
  }
  $: if (value !== undefined) {
    validation = validator.validate(validators, value, id);
    validation.error ? (validated = false) : (validated = true);
    msg = validation.msg;
  }
</script>

{#if Type === 'text'}
  <input
    {Type}
    {Class}
    {placeholder}
    {maxlength}
    {name}
    {id}
    {size}
    {required}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    {list}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'number'}
  <input
    {min}
    {max}
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {step}
    {size}
    {required}
    {readonly}
    {pattern}
    {list}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'password'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    {maxlength}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'range'}
  <input
    {min}
    {max}
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {step}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'textarea'}
  <textarea
    {Class}
    {rows}
    {name}
    {id}
    {required}
    {form}
    {dirname}
    {cols}
    {maxlength}
    {wrap}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'select'}
  <select
    class={Class}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated}>
    <slot />
  </select>
{/if}

{#if Type === 'date'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {list}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'checkbox'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    {checked}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'color'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'email'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {list}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'file'}
  <input
    {Type}
    {accept}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {multiple}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'radio'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    {checked}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'search'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'time'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {list}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'week'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {list}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'tel'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if Type === 'datetime-local'}
  <input
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {size}
    {required}
    {readonly}
    {pattern}
    {form}
    {disabled}
    {dirname}
    {autocomplete}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
{/if}

{#if !validated && showInvalidFeedback === 'true'}
  <div class="invalid-feedback">{msg}</div>
{/if}
{#if validated && showValidFeedback === 'true'}
  <div class="valid-feedback">{msg}</div>
{/if}
