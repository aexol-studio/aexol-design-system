import * as React from 'react'
import * as styles from './styles/InputStyle'

export interface IInputProps {
  type?: string;
  label?: string;
  starLabel?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  width?: number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  password?: boolean;
  passwordText: string;
  passwordLink?: string;
}

const LABEL_STAR = '*'

export const Input: React.FunctionComponent<IInputProps> = (props) => {
  const {
    type,
    label,
    starLabel = LABEL_STAR,
    placeholder,
    required = false,
    password = false,
    passwordLink,
    passwordText,
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
        width: fullWidth ? '80%' : width,
        ...style
      }}
    >
    <div className={styles.TextInputLabelDiv}>
    {label &&
        <label
          className={styles.TextInputLabel}
        >
          {label}
        </label>
      }
      {starLabel &&
      <span className={styles.TextInputStar}>*</span>
      }
    </div>
      <div className={styles.TextInputDiv}>
        <input
          type={type || 'text'}
          className={styles.TextInput}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          {...restProps}
        />
        {password &&
          <div className={styles.TextInputPassword}>
          <div className={styles.TextInputSpacer} />
          <a className={styles.TextInputHref} href={passwordLink}>{passwordText}</a>
        </div>
        }
        </div>
    </div>
  )
}

export default Input
