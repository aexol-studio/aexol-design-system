import * as React from 'react'
declare type ButtonType =
  | 'primary'
  | 'danger'
  | 'success'
  | 'submit'
  | 'secondary'
  | 'secondary2'
  | 'secondary3'
declare type ButtonSize = 'small' | 'default'
declare type ButtonShape = 'square' | 'round' | 'oval'
export interface IButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
  width?: number
  height?: number
  icon?: JSX.Element
  onClick?: (e: HTMLAnchorElement) => void
  href?: string
  target?: string
  style?: React.CSSProperties
}
export declare const Button: React.FunctionComponent<IButtonProps>
export default Button
