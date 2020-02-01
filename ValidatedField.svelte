<script>
  import validate from "./validator.js";
  export let id = null;
  export let placeholder = null;
  export let Class = null;
  export let Validators = null;
  export let Type = null;
  export let value = null;
  export let min = null;
  export let max = null;
  export let rows = null;
  export let cols = null;
  export let name = null;
  export let maxlength = null;
  export let showValidFeedback = true;
  export let showInvalidFeedback = true;
  let msg = "";
  let validated = null;
  $: if (value !== undefined) {
    let validation = validate(Validators, value, id);
    validation.error ? (validated = false) : (validated = true);
    msg = validation.msg;
  }
</script>

{#if Type === 'text'}
  <input
    {Type}
    {Class}
    {placeholder}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
  {#if validated === false}
    <div class="invalid-feedback">{msg}</div>
  {/if}
{/if}

{#if Type === 'number'}
  <input
    {min}
    {max}
    {Type}
    {Class}
    {placeholder}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
  {#if validated === false && showInvalidFeedback}
    <div class="invalid-feedback">{msg}</div>
  {/if}
  {#if validated === true && showValidFeedback}
    <div class="valid-feedback">{msg}</div>
  {/if}
{/if}

{#if Type === 'textarea'}
  <textarea
    {Class}
    {rows}
    {cols}
    {maxlength}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated} />
  {#if validated === false}
    <div class="invalid-feedback">{msg}</div>
  {/if}
{/if}

{#if Type === 'select'}
  <select
    class={Class}
    bind:value
    class:is-invalid={validated === false}
    class:is-valid={validated}>
    <slot />
  </select>
  {#if validated === false}
    <div class="invalid-feedback">{msg}</div>
  {/if}
{/if}
