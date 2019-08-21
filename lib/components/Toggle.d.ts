import * as React from 'react'
declare type ToggleShape = 'round' | 'oval'
export interface IToggleProps {
  shape?: ToggleShape
  value?: boolean
  onChange?: (value: boolean) => void
}
interface IToggleState {
  value: boolean
}
export declare class Toggle extends React.PureComponent<
  IToggleProps,
  IToggleState
> {
  constructor(props: IToggleProps)
  handleOnClick: (value: boolean) => void
  renderElements: () => JSX.Element
  render(): JSX.Element
}
export {}
