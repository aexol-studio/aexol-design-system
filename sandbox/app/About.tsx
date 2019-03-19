import * as React from 'react';
import {
  Button,
  Logo,
  Notification
} from '../../src';
import * as styles from './styles/AboutStyles';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

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
      <nav className={styles.Nav}>
        <Link to="/hero1" style={{marginRight: 10}}>Hero1</Link>
        <Link to="/hero2" style={{marginRight: 10}}>Hero2</Link>
        <Link to="/hero3" style={{marginRight: 10}}>Hero3</Link>
        <Link to="/hero4" style={{marginRight: 10}}>Hero4</Link>
        <Link to="/hero5">Hero5</Link>
      </nav>
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
