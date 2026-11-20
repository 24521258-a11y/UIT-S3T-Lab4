
import { useFormContext } from "./FormContext.jsx";

export default function InputField({
  name,
  label,
  type = "text",
  multiline = false
}) {
  const {
    values,
    errors,
    formId,
    updateField
  } = useFormContext();

  const fieldId = `${formId}-${name}`;
  const errorId = `${fieldId}-error`;
  const error = errors[name];

  const sharedProps = {
    id: fieldId,
    name,
    value: values[name],
    onChange: (event) => updateField(name, event.target.value),
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined
  };

  return (
    <div className="form-field">
      <label htmlFor={fieldId}>{label}</label>

      {multiline ? (
        <textarea {...sharedProps} rows={4} />
      ) : (
        <input {...sharedProps} type={type} />
      )}

      {error && (
        <p id={errorId} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}
