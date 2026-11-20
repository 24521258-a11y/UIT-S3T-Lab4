
import { FormProvider } from "./FormContext.jsx";
import SimpleForm from "./SimpleForm.jsx";

export default function FormPage() {
  return (
    <FormProvider>
      <SimpleForm />
    </FormProvider>
  );
}
