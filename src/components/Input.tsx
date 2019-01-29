import * as React from 'react';
import * as styles from './styles/InputStyle';

export interface IInputProps {
  type?: string,
  label?: string,
  placeholder?: string,
  required?: boolean
  onChange?: (value: string) => void,
  style?: React.CSSProperties;
}

export const Input: React.FunctionComponent<IInputProps> = (props) => {
  const {
    type,
    label,
    placeholder,
    required = false,
    onChange,
    style,
    ...restProps
  } = props
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }

  return (
    <div className={styles.TextInputContainer}>
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
        style={style}
        {...restProps}
      />
    </div>
  )
};

export default Input;
