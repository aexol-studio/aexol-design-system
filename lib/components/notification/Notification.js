import * as React from 'react'
import { NoticeBox } from './NoticeBox'
import * as styles from './styles/NotificationStyle'
const DEFAULT_DURATION = 5
export class Notification extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleOnClose = id => {
      this.setState(prevState => ({
        notifications: prevState.notifications.filter(f => f.id !== id)
      }))
    }
    this.addAlert = options => {
      this.setState(prevState => ({
        notifications: prevState.notifications.concat([
          {
            id: Date.now(),
            message: options.message,
            type: options.type,
            closable: options.closable
          }
        ])
      }))
    }
    this.renderElements = () => {
      if (this.state.notifications.length > 0) {
        return React.createElement(
          React.Fragment,
          null,
          this.state.notifications.map(el => {
            return React.createElement(NoticeBox, {
              key: el.id,
              id: el.id,
              message: el.message,
              type: el.type,
              duration: el.duration
                ? el.duration
                : el.closable
                ? undefined
                : DEFAULT_DURATION,
              closable: el.closable,
              onClose: this.handleOnClose
            })
          })
        )
      }
    }
    this.state = {
      open: false,
      number: 0,
      notifications: []
    }
  }
  render() {
    return React.createElement(
      'div',
      {
        ref: 'notification',
        className: styles.NotificationContainer
      },
      this.renderElements()
    )
  }
}
//# sourceMappingURL=Notification.js.map
