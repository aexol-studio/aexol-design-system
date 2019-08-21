import * as React from 'react'
export interface FoldingBoxProps {
  title: string
  text: string
  style?: React.CSSProperties
}
interface FoldingBoxState {
  open: boolean
}
export declare class FoldingBox extends React.PureComponent<
  FoldingBoxProps,
  FoldingBoxState
> {
  constructor(props: FoldingBoxProps)
  handleOpen: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void
  render(): JSX.Element
}
export {}
