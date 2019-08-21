import * as React from 'react'
import * as classnames from 'classnames'
import { Close, Warning, Info, Error, Success } from '../icons'
import * as styles from './styles/NotificationStyle'
export class NoticeBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.startTimer = () => {
      if (this.props.duration) {
        this.Timer = window.setTimeout(() => {
          this.closeTimer()
        }, this.props.duration * 1000)
      }
    }
    this.closeTimer = () => {
      this.clearTimer()
      if (this.props.onClose) {
        this.props.onClose(this.props.id)
      }
    }
    this.clearTimer = () => {
      if (this.closeTimer) {
        window.clearTimeout(this.Timer)
        this.Timer = 0
      }
    }
    this.handleOnClose = e => {
      this.setState({
        open: false
      })
      if (this.props.onClose) {
        this.props.onClose(this.props.id)
      }
    }
    this.handleType = () => {
      const { type } = this.props
      let icon = React.createElement(Info, { fill: 'White' })
      if (type === 'error') {
        icon = React.createElement(Error, { stroke: 'White' })
      } else if (type === 'alert') {
        icon = React.createElement(Warning, { stroke: 'White' })
      } else if (type === 'success') {
        icon = React.createElement(Success, { stroke: 'White' })
      }
      return React.createElement(React.Fragment, null, icon)
    }
    this.renderElements = () => {
      const { type = 'info', closable = false, message } = this.props
      return React.createElement(
        'div',
        { className: styles.NoticeBox },
        React.createElement(
          'div',
          { className: classnames(styles.NoticeIconBox, type) },
          React.createElement(
            'div',
            { className: classnames(styles.NoticeIcon, type) },
            this.handleType()
          )
        ),
        React.createElement('div', { className: styles.NoticeText }, message),
        closable &&
          React.createElement(
            'div',
            { className: styles.NoticeClose, onClick: this.handleOnClose },
            React.createElement(Close, { fill: 'Dark Side' })
          )
      )
    }
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
  render() {
    return React.createElement(React.Fragment, null, this.renderElements())
  }
}
//# sourceMappingURL=NoticeBox.js.map
