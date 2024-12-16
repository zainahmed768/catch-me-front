export const contactFormValidation = (formData, setFormErrors) => {
  let isValid = true;
  let errors = {};

  // Name validation
  if (!formData || !formData?.name) {
    if (!errors?.name) {
      errors.name = [];
    }
    errors.name.push("Name is required");
    isValid = false;
  } else if (formData?.name?.length < 2 || formData?.name?.length > 50) {
    if (!errors?.name) {
      errors.name = [];
    }
    errors.name.push("Name must be between 2 and 50 characters");
    isValid = false;
  }

  // Email validation
  if (!formData || !formData?.email) {
    if (!errors?.email) {
      errors.email = [];
    }
    errors.email.push("Email is required");
    isValid = false;
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData?.email)
  ) {
    if (!errors?.email) {
      errors.email = [];
    }
    errors.email.push("Please enter a valid email address");
    isValid = false;
  }

  // Phone number validation
  if (!formData || !formData?.phone) {
    if (!errors?.phone) {
      errors.phone = [];
    }
    errors.phone.push("Phone number is required");
    isValid = false;
  } else if (!/^\d{7,15}$/.test(formData?.phone)) {
    if (!errors?.phone) {
      errors.phone = [];
    }
    errors.phone.push("Phone number must be between 7 and 15 digits");
    isValid = false;
  }

  // Message validation
  if (!formData?.message) {
    if (!errors?.message) {
      errors.message = [];
    }
    errors.message.push("Message is required");
    isValid = false;
  } else if (formData?.message?.length > 500) {
    if (!errors?.message) {
      errors.message = [];
    }
    errors.message.push("Message cannot exceed 500 characters");
    isValid = false;
  }

  // Set errors in state
  setFormErrors(errors);
  return isValid;
};
