import * as React from 'react'
declare type ButtonSize = 'small' | 'default'
declare type ButtonShape = 'square' | 'round' | 'oval'
export interface IButtonProps {
  size?: ButtonSize
  shape?: ButtonShape
  width?: number
  height?: number
  style?: React.CSSProperties
}
export declare const LoadingButton: React.FunctionComponent<IButtonProps>
export default LoadingButton
