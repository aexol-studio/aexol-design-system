import * as React from 'react'
import * as classnames from 'classnames'
import { Close, Warning, Info, Error, Success } from '../icons'
import * as styles from './styles/NotificationStyle'

type NoticeBoxType = 'info' | 'error' | 'alert' | 'success'

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

export class NoticeBox extends React.PureComponent<
  INoticeBoxProps,
  INoticeBoxState
> {
  private Timer: number
  constructor(props: INoticeBoxProps) {
    super(props)
    this.state = {
      open: false
    }
    this.Timer = 0
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  startTimer = () => {
    if (this.props.duration) {
      this.Timer = window.setTimeout(() => {
        this.closeTimer()
      }, this.props.duration * 1000)
    }
  }

  closeTimer = () => {
    this.clearTimer()
    if (this.props.onClose) {
      this.props.onClose(this.props.id!)
    }
  }

  clearTimer = () => {
    if (this.closeTimer) {
      window.clearTimeout(this.Timer)
      this.Timer = 0
    }
  }

  handleOnClose = (e: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({
      open: false
    })
    if (this.props.onClose) {
      this.props.onClose(this.props.id!)
    }
  }

  handleType = () => {
    const { type } = this.props
    let icon = <Info fill={'White'} />
    if (type === 'error') {
      icon = <Error stroke={'White'} />
    } else if (type === 'alert') {
      icon = <Warning stroke={'White'} />
    } else if (type === 'success') {
      icon = <Success stroke={'White'} />
    }

    return <React.Fragment>{icon}</React.Fragment>
  }

  renderElements = () => {
    const { type = 'info', closable = false, message } = this.props

    return (
      <div className={styles.NoticeBox}>
        <div className={classnames(styles.NoticeIconBox, type)}>
          <div className={classnames(styles.NoticeIcon, type)}>
            {this.handleType()}
          </div>
        </div>
        <div className={styles.NoticeText}>{message}</div>
        {closable && (
          <div className={styles.NoticeClose} onClick={this.handleOnClose}>
            <Close fill={'Dark Side'} />
          </div>
        )}
      </div>
    )
  }

  render() {
    return <React.Fragment>{this.renderElements()}</React.Fragment>
  }
}
