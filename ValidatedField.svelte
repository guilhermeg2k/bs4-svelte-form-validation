<script>
  import { createEventDispatcher } from "svelte";
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
  export let readonly = false;
  export let size = null;
  export let step = null;
  export let wrap = null;
  export let showValidFeedback = "false";
  export let showInvalidFeedback = "true";
  export let validator = null;
  let msg = "";
  let validated = null;
  let lastValidated = null;
  let validation = null;
  const dispatch = createEventDispatcher();
  $: if (value !== undefined) {
    validation = validator.validate(validators, value, id);
    validation.error ? (validated = false) : (validated = true);
    msg = validation.msg;
    if (validated != lastValidated) {
      dispatch("changeValidation", {
        text: msg
      });
      if (validated === true) {
        dispatch("valid", {
          text: msg
        });
      }
      if (!validated) {
        dispatch("invalid", {
          text: msg
        });
      }
    }
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
    class:is-valid={validated} />
{/if}

{#if Type === 'select'}
  <select
    {Type}
    {Class}
    {placeholder}
    {name}
    {id}
    {required}
    class={Class}
    bind:value
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
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
    on:change
    on:click
    on:blclick
    on:mousedown
    on:mousemove
    on:mouseout
    on:mouseover
    on:mouseup
    on:onwheel
    on:drag
    on:dragend
    on:dragenter
    on:dragleave
    on:dragover
    on:dragstart
    on:drop
    on:scroll
    on:copy
    on:cut
    on:paste
    on:abort
    on:toggle
    class:is-invalid={!validated}
    class:is-valid={validated} />
{/if}

{#if !validated && showInvalidFeedback === 'true'}
  <div class="invalid-feedback">{msg}</div>
{/if}
{#if validated && showValidFeedback === 'true'}
  <div class="valid-feedback">{msg}</div>
{/if}
