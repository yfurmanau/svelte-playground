export const validateRequiredField = (value, label = "field") => {
  let error;
  if (!value) {
    error = `The ${label} is required`;
  }
  return error;
};

export const validateEmail = (value, label = "email") => {
  let error;
  if (value && !/^\S+@\S+\.\S+$/.test(value)) {
    error = `The ${label} is invalid`;
  }
  return error;
};
