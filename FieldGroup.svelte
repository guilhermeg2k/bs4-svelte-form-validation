<script>
  import { onMount, createEventDispatcher } from "svelte";
  export let id = null;
  export let Class = null;
  export let name = null;
  export let validator = null;
  let elements;
  let elementsIds = [];
  let groupValidated = false;
  let lastGroupValidated = null;
  const dispatch = createEventDispatcher();
  function validateGroup(e) {
    setTimeout(() => {
      groupValidated = validator.isValidated(elementsIds);
      if (groupValidated != lastGroupValidated) {
        dispatch("changeValidated", {
          text: "group change validated"
        });
        if (groupValidated === true) {
          dispatch("validated", {
            text: "group validated"
          });
        }
        if (groupValidated === false) {
          dispatch("invalidated", {
            text: "group invalidated"
          });
        }
      }
    }, 1);
  }
  onMount(() => {
    elements = document.getElementById(id).childNodes;
    Array.from(elements).forEach(element => {
      if (element.tagName === "INPUT") {
        elementsIds.push(element.id);
        element.addEventListener("input", validateGroup);
      }
    });
  });
</script>

<div {id} {Class} {name}>
  <slot />
</div>
