import React from 'react';

interface ToggleGroupOption {
  label: string;
  value: string;
}

interface ToggleGroupProps {
  label: string;
  name: string;
  options: ToggleGroupOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  allowCustom?: boolean;
  customValue?: string;
  onCustomChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customPlaceholder?: string;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  error,
  required = false,
  allowCustom = false,
  customValue,
  onCustomChange,
  customPlaceholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-warm-gray-800 font-medium tracking-wide text-sm uppercase">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              px-5 py-2 rounded-full border text-sm font-medium
              transition-all duration-200 ease-in-out
              ${selectedValue === option.value
                ? 'bg-lavender-600 border-lavender-600 text-white shadow-lg'
                : 'bg-white border-warm-gray-300 text-warm-gray-700 hover:border-lavender-400 hover:text-lavender-600'
              }
              focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:ring-opacity-50
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
      {allowCustom && selectedValue === 'something-else' && (
        <input
          type="text"
          name={`${name}-custom`}
          placeholder={customPlaceholder || 'Please specify'}
          value={customValue}
          onChange={onCustomChange}
          className={`
            w-full p-3 border rounded-lg bg-white/10 text-warm-gray-800 placeholder-warm-gray-500
            focus:outline-none focus:ring-2 focus:ring-lavender-600 focus:border-transparent
            transition-all duration-200 ease-in-out mt-3
            ${error ? 'border-rose-500' : 'border-warm-gray-300'}
          `}
        />
      )}
      {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ToggleGroup;
