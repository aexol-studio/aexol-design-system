import * as React from 'react'
// import classnames from 'classnames'
import {
  Logo,
  Button,
  MenuItems
} from '../../src'
import * as styles from './styles/TopMenuStyles'
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>

const DEFAULT_LOGO_WIDTH = 300

class About extends React.PureComponent<IProps> {
  render() {
    return (
      <header className={styles.TopMenu}>
        <div className={styles.Container}>
          <div className={styles.LogoContainer}>
            <Logo
              width={DEFAULT_LOGO_WIDTH}
              logoURL={require('../assets/images/AexolLogo.png')}
            />
          </div>
          <div className={styles.MenuItems}>
            <MenuItems
              links={[
                {
                  name: 'About',
                  to: '/'
                },
                {
                  name: 'Prices',
                  to: '/'
                },
                {
                  name: 'Contact',
                  to: '/'
                },
              ]}
            />
            <div className={styles.ButtonContainer}>
              <Button
                onClick={() => {}}
                shape="oval"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
export default withRouter(About)
