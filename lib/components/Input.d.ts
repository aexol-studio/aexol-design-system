import * as React from 'react'
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
export declare const Input: React.FunctionComponent<IInputProps>
export default Input
