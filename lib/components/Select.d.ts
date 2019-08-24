import * as React from 'react'
export interface ISelectProps {
  options: Array<{
    label: string
    value: any
  }>
  placeholder?: string
  label?: string
  onChange: (val: any) => void
  value: any | undefined
  style?: React.CSSProperties
}
interface ISelectState {
  open: boolean
  inputMatch: string
}
export declare class Select extends React.PureComponent<
  ISelectProps,
  ISelectState
> {
  constructor(props: ISelectProps)
  addValue: (value: any) => void
  render(): JSX.Element
}
export {}
