import * as React from 'react'
export interface IInputProps {
  type?: string
  label?: string
  starLabel?: boolean
  placeholder?: string
  maxLength?: number
  required?: boolean
  onChange?: (value: string) => void
  width?: number
  fullWidth?: boolean
  style?: React.CSSProperties
  password?: boolean
  passwordText?: string
  passwordLink?: string
}
export declare const Input: React.FunctionComponent<IInputProps>
export default Input
