import * as React from 'react';
import * as styles from './styles/InputStyle';

export interface IInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  width?: number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export const Input: React.FunctionComponent<IInputProps> = (props) => {
  const {
    type,
    label,
    placeholder,
    required = false,
    onChange,
    width,
    fullWidth,
    style,
    ...restProps
  } = props
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }

  return (
    <div
      className={styles.TextInputContainer}
      style={{width: fullWidth
          ? '80%'
          : width,
        ...style
      }}
    >
      {label &&
        <label
          className={styles.TextInputLabel}
        >
          {label}
        </label>
      }
      <input
        type={type || 'text'}
        className={styles.TextInput}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        {...restProps}
      />
    </div>
  )
};

export default Input;
