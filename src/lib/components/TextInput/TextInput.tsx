import * as React from "react";
import * as styles from "../styles/TextInputStyle";

export interface TextInputProps {
  type?: string,
  label?: string,
  placeholder?: string,
  required?: boolean
  onChange?: (value: string) => void,
}

export const TextInput: React.SFC<TextInputProps> = (props) => {
  const { type, label, placeholder, required = false, onChange } = props
  const handleChange = (e) => { onChange(e); }
  return (
    <div className={styles.TextInputContainer}>
      {label && <label className={styles.TextInputLabel}>{label}</label>}
      <input
        type={type || 'text'}
        className={styles.TextInput}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
};

export default TextInput;
