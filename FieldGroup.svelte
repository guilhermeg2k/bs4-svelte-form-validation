<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let id = null;
  export let Class = null;
  export let name = null;
  export let validator = null;
  let elementsIds = [];
  let groupValidated = false;
  let lastGroupValidated = null;
  const dispatch = createEventDispatcher();
  function validateGroup(e) {
    setTimeout(() => {
      groupValidated = validator.isValidated(elementsIds);
      if (groupValidated != lastGroupValidated) {
        dispatch("changeValidation", {
          text: "group change validated"
        });
        if (groupValidated === true) {
          dispatch("valid", {
            text: "group validated"
          });
        }
        if (groupValidated === false) {
          dispatch("invalid", {
            text: "group invalidated"
          });
        }
      }
    }, 1);
  }
  onMount(() => {
    let elements = document
      .getElementById(id)
      .querySelectorAll("input.is-invalid");
    let selects = document
      .getElementById(id)
      .querySelectorAll("select.is-invalid")[0];
    let textareas = document
      .getElementById(id)
      .querySelectorAll("textarea.is-invalid")[0];
    if (selects != undefined) {
      elements = [...elements, selects];
    }
    if (textareas != undefined) {
      elements = [...elements, textareas];
    }
    Array.from(elements).forEach(element => {
      if (
        element.tagName === "INPUT" ||
        element.tagName === "SELECT" ||
        element.tagName === "TEXTAREA"
      ) {
        elementsIds.push(element.id);
        element.addEventListener("input", validateGroup);
      }
    });
  });
</script>

<div {id} {Class} {name}>
  <slot />
</div>
