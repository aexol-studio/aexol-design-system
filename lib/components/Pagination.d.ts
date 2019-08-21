import * as React from 'react'
export interface IPaginationProps {
  pageSize?: number
  total?: number
  onChange?: (page: number, pageSize: number) => void
}
interface IPaginationState {
  page: number
  pageSize: number
}
export declare class Pagination extends React.PureComponent<
  IPaginationProps,
  IPaginationState
> {
  constructor(props: IPaginationProps)
  handleOnClick: (page: number) => void
  handleNavOnClick: (inc: number) => void
  renderElements: () => JSX.Element
  render(): JSX.Element
}
export {}
