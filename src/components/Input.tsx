import * as React from 'react'
import * as styles from './styles/InputStyle'

export interface IInputProps {
  type?: string
  label?: string
  starLabel?: boolean
  placeholder?: string
  maxLength?: number
  required?: boolean
  onChange?: (value: string) => void
  style?: React.CSSProperties
  value: any
}

const LABEL_STAR = ''

export const Input: React.FunctionComponent<IInputProps> = props => {
  const {
    type,
    label,
    starLabel = LABEL_STAR,
    placeholder,
    required = false,
    maxLength,
    onChange,
    style,
    value
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
        ...style
      }}
    >
      <div className={styles.TextInputLabelDiv}>
        {label && <label className={styles.TextInputLabel}>{label}</label>}
        {starLabel && <span className={styles.TextInputStar}>*</span>}
      </div>
      <div className={styles.TextInputDiv}>
        <input
          type={type || 'text'}
          className={styles.TextInput}
          onChange={handleChange}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          value={value}
        />
      </div>
    </div>
  )
}

export default Input
