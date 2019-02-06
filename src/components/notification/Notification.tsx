import * as React from 'react';
// import * as classnames from 'classnames';
import { INoticeBoxProps, NoticeBox } from './NoticeBox'
import * as styles from './styles/NotificationStyle';

export interface INotificationProps {

}

interface INotificationState {
  open: boolean;
  number: number;
  notifications: INoticeBoxProps[];
}

const DEFAULT_DURATION = 5

export class Notification extends React.PureComponent<INotificationProps, INotificationState> {
  constructor(props: INotificationProps) {
    super(props)
    this.state = {
      open: false,
      number: 0,
      notifications: []
    }
  }

  handleOnClose = (id: number) => {
    this.setState((prevState) => ({
      notifications: prevState.notifications.filter(f => f.id !== id)
    }))
  }

  addAlert = (options: INoticeBoxProps) => {
    this.setState((prevState) => ({
      notifications: prevState.notifications.concat([{
        id: Date.now(),
        message: options.message,
        type: options.type,
        closable: options.closable
      }])
    }))
  }

  renderElements = () => {
    if (this.state.notifications.length > 0) {
      return(
        <React.Fragment>
          {this.state.notifications.map(el => {
            return(
              <NoticeBox
                key={el.id}
                id={el.id}
                message={el.message}
                type={el.type}
                duration={el.duration
                  ? el.duration
                  : el.closable
                    ? undefined
                    : DEFAULT_DURATION
                }
                closable={el.closable}
                onClose={this.handleOnClose}
              />
            )
          })}
        </React.Fragment>
      )
    }
  }

  render() {
    return React.createElement(
      'div',
      {
        ref: 'notification',
        className: styles.NotificationContainer
      }, this.renderElements()
    )
  }
}
