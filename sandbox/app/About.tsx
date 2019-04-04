import * as React from 'react';
import { Button, Logo, Notification, NavBar } from '../../src';
import * as styles from './styles/AboutStyles';
import { withRouter, RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

const nav = [
  {
    name: 'Hero2Img',
    to: '/Hero2Img'
  },
  {
    name: 'Hero1Img',
    to: '/Hero1Img'
  },
  {
    name: 'HeroImgOnBottom',
    to: '/HeroImgOnBottom'
  },
  {
    name: 'HeroBackImgWithTile',
    to: '/HeroBackImgWithTile'
  },
  {
    name: 'HeroBackImgWithText',
    to: '/HeroBackImgWithText'
  },
];

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
      <React.Fragment>
        <NavBar
          color="white"
          buttonText="Sign In"
          onClick={() => {}}
          logo={<img src="../assets/images/AexolLogo.png" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
        >
          {nav.map((el, idx) => (
            <Link to={el.to} key={idx}>
              {el.name}
            </Link>
          ))}
        </NavBar>
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
      </React.Fragment>
    );
  }
}
export default withRouter(About);
