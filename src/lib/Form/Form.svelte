<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { writable } from "svelte/store";
  import formKeys from "./form-key.js";

  const dispatch = createEventDispatcher();

  export let initialValues = {};
  const formStore = writable({
    values: initialValues,
    errors: {},
    showErrors: false,
  });

  setContext(formKeys, formStore);
</script>

<pre>
  {JSON.stringify($formStore, null, 2)}
</pre>

<form
  on:submit|preventDefault={() => {
    if (Object.keys($formStore.errors).length === 0) {
      dispatch("submit", $formStore.values);
    } else {
      $formStore.showErrors = true;
    }
  }}
>
  <slot />
</form>
