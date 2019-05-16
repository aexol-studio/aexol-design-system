import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/BlueTileStyles'
import { H1, P } from './typography'
import { Colors } from './styles/Colors'

export interface BlueTileComponentProps {
  BlueTileHeader: string
  BlueTileHeaderParagraph: string
  envelope?: string
  children?: React.ReactNode
  isVisible?: boolean
  ContactImg?: string
  id?: string
}

export const BlueTile: React.FunctionComponent<
  BlueTileComponentProps
> = props => {
  const {
    BlueTileHeader,
    BlueTileHeaderParagraph,
    envelope,
    ContactImg = require('../assets/images/ContactRequest1@2x.png'),
    isVisible,
    id,
    ...restProps
  } = props

  return (
    <div className={classnames(styles.BlueTileMain)}>
      <div className={styles.BlueTileContainer} {...restProps}>
        <div className={styles.TileContent}>
          <div className={styles.TileLeftContent}>{props.children}</div>
          <div className={styles.TileRightContent}>
            {isVisible && (
              <div className={styles.TileRightEvelope}>
                <img
                  src={ContactImg}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
                {envelope}
              </div>
            )}

            <div className={styles.TileRightHeader}>
              <H1>{BlueTileHeader}</H1>
            </div>
            <div className={styles.TileRightParagraph}>
              <P style={{ color: Colors.White }}>{BlueTileHeaderParagraph}</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
