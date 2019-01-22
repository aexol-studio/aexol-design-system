import * as React from 'react';
import * as styles from './styles/TextInputStyle';

export interface ITextInputProps {
  type?: string,
  label?: string,
  placeholder?: string,
  required?: boolean
  onChange?: (value: string) => void,
}

export const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  const {
    type,
    label,
    placeholder,
    required = false,
    onChange
  } = props
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.value)

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
      />
    </div>
  )
};

export default TextInput;
