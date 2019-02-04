import * as React from 'react'
// import classnames from 'classnames'
import {
  Button,
  Logo
} from '../../src'
import * as styles from './styles/AboutStyles'
import { withRouter, RouteComponentProps } from 'react-router';
import { NamespacesConsumer } from 'react-i18next'

type IProps = RouteComponentProps<any>

const DEFAULT_LOGO_WIDTH = 150

class About extends React.PureComponent<IProps> {

  onclickHandler = (e: HTMLButtonElement) => {
    alert('learn more')
  }

  render() {
    return (
      <div className={styles.About}>
        <div className={styles.Container}>
          <Logo
            width={DEFAULT_LOGO_WIDTH}
            logoURL={require('../assets/images/AexolLogo.png')}
          />
          <Button
            onClick={this.onclickHandler}
          >
            <NamespacesConsumer>
            {
              t => t('aboutButton')
            }
            </NamespacesConsumer>
          </Button>
        </div>
      </div>
    )
  }
}
export default withRouter(About)
