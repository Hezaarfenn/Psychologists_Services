import { useField } from "formik";

// Custom Input Component with inline error
export const ErrorField = ({
  name,
  type,
  placeholder,
  as = "input",
  className = "",
}) => {
  const [field, meta] = useField(name);

  const Component = as;

  return (
    <div className="relative">
      <Component
        {...field}
        type={type}
        placeholder={placeholder}
        className={`w-full border border-[#191A15]/10 p-2 rounded-[12px] focus:outline-none ${className}`}
      />
      {meta.touched && meta.error && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-xs font-medium max-w-[100px] text-right">
          {meta.error}
        </div>
      )}
    </div>
  );
};
