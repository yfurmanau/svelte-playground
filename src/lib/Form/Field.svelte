<script>
  import { v4 as uuid } from "uuid";
  import {
    getContext,
    onMount,
    hasContext,
    getAllContexts,
  } from "svelte";
  import formKey from "./form-key.js";

  export let name;
  export let type = "text";
  export let label = undefined;
  export let validate = undefined;

  console.log(hasContext("edf"));
  console.log(hasContext(formKey));
  console.log(getAllContexts());

  let isDirty = false;

  const formStore = getContext(formKey);

  const id = uuid();

  onMount(() => {
    if (validate && validate($formStore.values[name])) {
      $formStore.errors[name] = validate(
        $formStore.values[name],
        label,
      );
    }
  });
</script>

<div class="field">
  {#if label}
    <label for={id}>{label}</label>
  {/if}
  <input
    value={$formStore.values[name] || ""}
    {id}
    {name}
    {type}
    placeholder={label}
    autocomplete="off"
    on:input={(e) => {
      isDirty = true;
      const value = e.currentTarget.value;
      if (validate && validate(value)) {
        $formStore.errors[name] = validate(value, label);
      } else {
        delete $formStore.errors[name];
      }
      $formStore.values[name] = value;
    }}
  />
  {#if $formStore.errors[name] && (isDirty || $formStore.showErrors)}
    <slot name="error" error={$formStore.errors[name]}>
      <p class="error">{$formStore.errors[name]}</p>
    </slot>
  {/if}
</div>

<style>
  p.error {
    color: red;
    font-size: 14px;
    margin: 5px 0 0;
  }
  .field {
    margin-bottom: 10px;
  }
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }
  input {
    height: 30px;
    width: 250px;
    max-width: 100%;
  }
</style>
