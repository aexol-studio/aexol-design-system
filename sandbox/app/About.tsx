import * as React from 'react';
// import classnames from 'classnames'
import { Button, Logo, Notification } from '../../src';
import * as styles from './styles/AboutStyles';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>;

const DEFAULT_LOGO_WIDTH = 150;

class About extends React.PureComponent<IProps> {
  private notification: React.RefObject<Notification>;
  constructor(props: IProps) {
    super(props);
    this.notification = React.createRef();
  }

  onclickHandler = (e: HTMLButtonElement) => {
    if (this.notification) {
      this.notification.current!.addAlert({
        message: 'This is a notification!',
        type: 'info',
        closable: true
      });
    }
  };

  render() {
    return (
      <div className={styles.About}>
        <div className={styles.Container}>
          <Logo
            width={DEFAULT_LOGO_WIDTH}
            logoURL={require('../assets/images/AexolLogo.png')}
          />
          <Button onClick={this.onclickHandler}>About</Button>
          <Notification ref={this.notification} />
        </div>
      </div>
    );
  }
}
export default withRouter(About);
