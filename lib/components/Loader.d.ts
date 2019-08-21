import * as React from 'react'
export interface ILoaderProps {
  width?: number
  duration?: number
  progress?: boolean
  style?: React.CSSProperties
}
export interface ILoaderState {
  progress: number
}
export declare class Loader extends React.PureComponent<
  ILoaderProps,
  ILoaderState
> {
  constructor(props: ILoaderProps)
  componentDidMount(): void
  componentWillUnmount(): void
  renderProgress: () => JSX.Element
  render(): JSX.Element
}
export default Loader
