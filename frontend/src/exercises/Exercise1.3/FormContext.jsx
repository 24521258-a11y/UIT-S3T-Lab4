
import {
  createContext,
  useContext,
  useId,
  useState
} from "react";

const FormContext = createContext(null);

const initialValues = {
  fullName: "",
  email: "",
  age: "",
  message: ""
};

function evaluateErrors(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = "Name must have at least 3 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (values.age === "") {
    errors.age = "Age is required.";
  } else if (
    !Number.isInteger(Number(values.age)) ||
    Number(values.age) < 18 ||
    Number(values.age) > 100
  ) {
    errors.age = "Age must be between 18 and 100.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must have at least 10 characters.";
  }

  return errors;
}

export function FormProvider({ children }) {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  // Synchronous validation during render
  const errors = evaluateErrors(values);
  const isValid = Object.keys(errors).length === 0;

  // Stable unique accessibility prefix
  const formId = useId();

  function updateField(name, value) {
    setValues((previous) => ({
      ...previous,
      [name]: value
    }));
    setSubmitted(false);
  }

  function submitForm(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setValues(initialValues);
    setSubmitted(false);
  }

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        isValid,
        formId,
        submitted,
        updateField,
        submitForm,
        resetForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormContext must be used inside FormProvider"
    );
  }

  return context;
}
