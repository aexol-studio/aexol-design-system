import * as React from 'react'
import * as classnames from 'classnames';
import { H4, PMedium } from './typography';
import * as styles from './styles/CardComponent';
import { Colors } from './styles/Colors';

export interface ICardComponentProps {
  boxText: string;
  boxTitle: string;
  icon?: JSX.Element;
  style?: React.CSSProperties;
}

export const CardComponent: React.FunctionComponent<ICardComponentProps> = (props) => {
  const {
    boxText,
    boxTitle,
    icon,
    style,
    ...restProps
  } = props

  return (
        <div
          className={classnames(
            styles.CardComponentContainer
          )}
          style={style}
          {...restProps}
        >
          {icon && <div className={styles.logo}>{icon}</div>}
          <div className={styles.rectangle}>
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
          </div>

          <div className={styles.boxTitle}>
            <H4 style={{color: Colors['Black Hole']}}>
              {boxTitle}
            </H4>
          </div>
          <div className={styles.boxText}>
            <PMedium>
              {boxText}
            </PMedium>
          </div>
        </div>
  )
}
