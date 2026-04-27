import { useId } from 'react';
import './Input.css';

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  error = null,
  disabled = false,
  ...props
}) {
  const id = useId();

  const containerClasses = [
    'input',
    error ? 'input--error' : '',
    disabled ? 'input--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="input__field"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error || helperText ? `${id}-helper` : undefined}
        {...props}
      />
      {(error || helperText) && (
        <span id={`${id}-helper`} className="input__helper">
          {error || helperText}
        </span>
      )}
    </div>
  );
}
