import * as React from 'react'
declare type NoticeBoxType = 'info' | 'error' | 'alert' | 'success'
export interface INoticeBoxProps {
  id?: number
  duration?: number
  type?: NoticeBoxType
  closable?: boolean
  message: string
  onClose?: (id: number) => void
}
interface INoticeBoxState {
  open: boolean
}
export declare class NoticeBox extends React.PureComponent<
  INoticeBoxProps,
  INoticeBoxState
> {
  private Timer
  constructor(props: INoticeBoxProps)
  componentDidMount(): void
  componentWillUnmount(): void
  startTimer: () => void
  closeTimer: () => void
  clearTimer: () => void
  handleOnClose: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void
  handleType: () => JSX.Element
  renderElements: () => JSX.Element
  render(): JSX.Element
}
export {}
