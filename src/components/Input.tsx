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
  password: boolean;
}

export const Input: React.FunctionComponent<IInputProps> = (props) => {
  const {
    type,
    label,
    placeholder,
    required = false,
    password = false,
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
      style={{
        width: fullWidth
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
      <div>
        <input
          type={type || 'text'}
          className={styles.TextInput}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          {...restProps}
        />
        </div>
      <div>
        {password &&
          <div
            className={styles.TextInputLabel1}
          >
            {password}
          </div>
        }
          <div className={styles.TextInputLabelForgot}>
            <a href="google.pl">Forgot?</a>
          </div>
      </div>
    </div>
  )
};

export default Input;
