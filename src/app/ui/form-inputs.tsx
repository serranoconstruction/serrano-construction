import { type UseFormRegister, type FieldErrors } from "react-hook-form";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  details: string;
}

interface InputProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  isTextArea?: boolean;
}

export function FormInput({
  label,
  name,
  type = "text",
  register,
  errors,
  isTextArea = false,
}: InputProps) {
  const inputProps = {
    ...register(name),
    id: name,
    type,
    className:
      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300",
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-black-400">
        {label}
      </label>
      {isTextArea ? (
        <textarea {...inputProps} rows={4} />
      ) : (
        <input {...inputProps} />
      )}
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  );
}
