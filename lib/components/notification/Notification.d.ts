import * as React from 'react'
import { INoticeBoxProps } from './NoticeBox'
export interface INotificationProps {}
interface INotificationState {
  open: boolean
  number: number
  notifications: INoticeBoxProps[]
}
export declare class Notification extends React.PureComponent<
  INotificationProps,
  INotificationState
> {
  constructor(props: INotificationProps)
  handleOnClose: (id: number) => void
  addAlert: (options: INoticeBoxProps) => void
  renderElements: () => JSX.Element | undefined
  render(): React.DetailedReactHTMLElement<
    {
      ref: string
      className: string
    },
    HTMLElement
  >
}
export {}
