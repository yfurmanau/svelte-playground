<script>
  let values = { username: "", email: "", password: "" };
  let errors = {};
  let isSubmitting = false;

  const validate = () => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
</script>

{JSON.stringify(values)}
<form
  on:submit|preventDefault={() => {
    errors = validate();
    if (Object.keys(errors).length === 0) {
      isSubmitting = true;
      setTimeout(() => {
        isSubmitting = false;
      }, 1000);
    }
  }}
>
  <label>
    Username:
    <input bind:value={values.username} name="username" type="text" />
  </label>
  {#if errors.username}<p>{errors.username}</p>{/if}
  <label>
    Email:
    <input bind:value={values.email} name="email" type="text" />
  </label>
  {#if errors.email}<p>{errors.email}</p>{/if}
  <label>
    Password:
    <input
      bind:value={values.password}
      name="username"
      type="password"
    />
  </label>
  {#if errors.password}<p>{errors.password}</p>{/if}
  <button disabled={isSubmitting} type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
