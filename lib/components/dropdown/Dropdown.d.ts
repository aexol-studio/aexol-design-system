import * as React from 'react'
export interface IDropdownProps {}
interface DropdownState {
  selected: string
}
export declare class Dropdown extends React.PureComponent<
  IDropdownProps,
  DropdownState
> {
  constructor(props: IDropdownProps)
  handleOnClick: (
    child: React.ReactElement<
      any,
      | string
      | ((
          props: any
        ) => React.ReactElement<
          any,
          string | any | (new (props: any) => React.Component<any, any, any>)
        > | null)
      | (new (props: any) => React.Component<any, any, any>)
    >
  ) => void
  renderElements: () => JSX.Element
  render(): JSX.Element
}
export {}
