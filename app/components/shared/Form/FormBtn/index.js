import { useFormikContext } from "formik";
import Button from "../../../../utils/Button";

function FormBtn({ title, loading = false, className }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      title={title}
      loading={loading}
      onClick={handleSubmit}
      type="button"
      className={className}
    />
  );
}

export default FormBtn;
