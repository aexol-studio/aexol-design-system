import * as React from 'react'
import * as classnames from 'classnames';
import { H4, PMedium } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

export interface ICardComponentProps {
  boxText: string;
  boxTitle: string;
  corner?: Corner;
  style?: React.CSSProperties;
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {
  const {
    boxText,
    boxTitle,
    style,
    ...restProps
  } = props

  return (
    <div className={styles.CardHero}>
      <div className={styles.ComponentHero}>
        <div
          className={classnames(
            styles.BlackFooterContainer,
          )}
          {...restProps}
        >
          <div className={styles.logo}>img</div>
          <div className={styles.rectangle}>
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
          </div>

          <div className={styles.boxTitle}>
            <H4 style={{
              color: Colors['Black Hole'],
            }}>
              {boxTitle}
            </H4>
          </div>
          <div className={styles.boxText}>
            <PMedium>
              {boxText}
            </PMedium>
          </div>
        </div>
      </div>
    </div>
  )
}
