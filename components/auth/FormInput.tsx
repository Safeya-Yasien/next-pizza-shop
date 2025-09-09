import { FieldError } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const FormInput = ({ label, error, ...props }: FormInputProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500 outline-none transition"
      />
      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
