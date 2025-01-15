import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const inputVariants = cva(
  "w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300",
  {
    variants: {
      state: {
        default: "border-gray-300",
        error: "border-red-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  label: string;
  isTextArea?: boolean;
  error?: string;
  required?: boolean;
}

const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      label,
      isTextArea = false,
      error,
      required = false,
      state,
      className,
      ...props
    },
    ref,
  ) => {
    const inputClassName = cn(
      inputVariants({
        state: error ? "error" : "default",
        className,
      }),
    );

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={props.id || props.name}
          className="block text-black-400"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {isTextArea ? (
          // @ts-expect-error - ref
          <textarea ref={ref} className={inputClassName} {...props} rows={4} />
        ) : (
          // @ts-expect-error - ref
          <input ref={ref} className={inputClassName} {...props} />
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export { FormInput, inputVariants };
