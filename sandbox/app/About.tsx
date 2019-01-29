import * as React from 'react'
// import classnames from 'classnames'
import {
  Heading,
  Button,
  Paragraph
} from '../../src'
import * as styles from './styles/AboutStyles'
import { withRouter, RouteComponentProps } from 'react-router';
import { NamespacesConsumer } from 'react-i18next'

type IProps = RouteComponentProps<any>

const HEADING_WIDTH = 280
const PARAGRAPH_WIDTH = 480
const BUTTON_WIDTH = 160

class About extends React.PureComponent<IProps> {

  onclickHandler = (e: HTMLButtonElement) => {
    // console.log("learn more")
  }

  render() {
    return (
      <div className={styles.About}>
        <div className={styles.Container}>
          <div className={styles.TextContainer}>
            <Heading
              type="h1"
              width={HEADING_WIDTH}
            >
              <NamespacesConsumer>
              {
                t => t('aboutHeading')
              }
              </NamespacesConsumer>
            </Heading>
            <Paragraph
              type="medium"
              align="left"
              width={PARAGRAPH_WIDTH}
            >
              <NamespacesConsumer>
              {
                t => t('aboutParagraph')
              }
              </NamespacesConsumer>
            </Paragraph>
            <Button
              onClick={this.onclickHandler}
              width={BUTTON_WIDTH}
            >
              <NamespacesConsumer>
              {
                t => t('aboutButton')
              }
              </NamespacesConsumer>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(About)
