import * as React from 'react'
declare type CheckboxShape = 'round' | 'square'
export interface ICheckBoxProps {
  shape?: CheckboxShape
  value?: boolean
  checkboxParagraph?: string | JSX.Element
  onChange?: (value: boolean) => void
}
interface ICheckboxState {
  value: boolean
}
export declare class Checkbox extends React.PureComponent<
  ICheckBoxProps,
  ICheckboxState
> {
  constructor(props: ICheckBoxProps)
  handleOnClick: (value: boolean) => void
  renderElements: () => JSX.Element
  render(): JSX.Element
}
export {}
