
import { useFormContext } from "./FormContext.jsx";
import InputField from "./InputField.jsx";
import ShowData from "./ShowData.jsx";

export default function SimpleForm() {
  const {
    values,
    isValid,
    submitted,
    submitForm,
    resetForm
  } = useFormContext();

  return (
    <section className="form-card">
      <h1>Context-Driven Multi-Field Form Engine</h1>

      <p>
        Synchronous validation without chained useEffect hooks.
      </p>

      <form onSubmit={submitForm} noValidate>
        <InputField name="fullName" label="Full Name" />
        <InputField name="email" label="Email" type="email" />
        <InputField name="age" label="Age" type="number" />
        <InputField
          name="message"
          label="Message"
          multiline
        />

        <div className="form-actions">
          <button type="submit" disabled={!isValid}>
            Submit
          </button>

          <button
            type="button"
            className="reset-button"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>

        <p
          className={isValid ? "valid-status" : "invalid-status"}
          aria-live="polite"
        >
          {isValid
            ? "Form is valid and ready to submit."
            : "Please correct the validation errors."}
        </p>
      </form>

      {submitted && isValid && <ShowData data={values} />}
    </section>
  );
}
