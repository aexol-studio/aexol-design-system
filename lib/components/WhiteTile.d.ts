import * as React from 'react'
declare type SelectOptions = {
  options: Array<{
    value: number
    label: string
  }>
  placeholder: string
  label: string
}
declare type InputTextName = {
  label: string
  placeholder: string
  type: string
  starLabel: boolean
}
declare type InputTextEmail = {
  label: string
  placeholder: string
  type: string
  starLabel: boolean
}
declare type CheckboxText = {
  shape: 'round' | 'square'
  paragraph?: string | JSX.Element
}
declare type ReturnedWhiteTileValue = {
  checkboxHandler1: boolean
  checkboxHandler2: boolean
  emailHandler: string
  textNameHandler: string
  SelectedOption: number
}
interface IGetInputTextProps {
  id?: string
  SelectOptions: SelectOptions
  InputTextName: InputTextName
  InputTextEmail: InputTextEmail
  CheckboxTextFirst: CheckboxText
  CheckboxTextSecond: CheckboxText
  WhiteTileParagraph?: string
  WhiteButtonText: string
  onSubmit: (value: ReturnedWhiteTileValue) => void
}
interface IGetInputTextState {
  error: string
  emailHandler: string
  textNameHandler: string
  checkboxHandler1: boolean
  checkboxHandler2: boolean
  SelectComumnsTxt: any
  isVisibleParagraph?: boolean
}
export declare class WhiteTile extends React.PureComponent<
  IGetInputTextProps,
  IGetInputTextState
> {
  constructor(props: any)
  inputTextNameHandler: (val: string) => void
  inputTextEmailHandler: (val: string) => void
  checkboxHandler1: (val: any) => void
  checkboxHandler2: (val: any) => void
  selectHandler: (val: any) => void
  isVisibleParagraph: (val: any) => void
  onClickHandler: () => void
  render(): JSX.Element
}
export {}
