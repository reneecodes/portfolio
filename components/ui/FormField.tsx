import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  textarea = false,
}) => {
  const inputClasses = `
    w-full p-3 border rounded-lg bg-white/10 text-warm-gray-800 placeholder-warm-gray-500
    focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:border-transparent focus:shadow-lg focus:shadow-lavender-500/20
    transition-all duration-200 ease-in-out hover:border-lavender-300
    ${error ? 'border-rose-500' : 'border-warm-gray-300'}
  `;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-warm-gray-800 font-medium tracking-wide text-sm uppercase">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={inputClasses}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
      {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
