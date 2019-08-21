import * as React from 'react'
export interface ISelectProps {
  options: Array<{
    label: string
    value: any
  }>
  placeholder?: string
  label?: string
  onChange?: (val: any) => void
  style?: React.CSSProperties
}
interface ISelectState {
  open: boolean
  inputMatch: any
  fieldVal: any
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
