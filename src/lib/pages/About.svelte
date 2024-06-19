<script>
  import { Field, Form } from "../Form/index.js";
  import {
    validateRequiredField,
    validateEmail,
  } from "../utils/validation.js";
</script>

<Form
  initialValues={{
    username: "Alex",
    email: "test@mail.io",
  }}
  let:hasErrors
  let:errors
  on:submit={(e) => {
    console.log(e.detail);
  }}
>
  <Field
    label="Username"
    name="username"
    type="text"
    validate={validateRequiredField}
  >
    <p style="color: blueviolet" slot="error" let:error>{error}</p>
  </Field>
  <Field
    label="Email"
    name="email"
    type="email"
    validate={(value, label) => {
      return (
        validateRequiredField(value, label) ||
        validateEmail(value, label)
      );
    }}
  />
  <Field
    label="Password"
    name="password"
    type="password"
    validate={validateRequiredField}
  />
  <button type="submit" disabled={hasErrors}>Submit</button>
</Form>
