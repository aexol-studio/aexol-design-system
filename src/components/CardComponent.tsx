import * as React from 'react'
import * as classnames from 'classnames';
import { H4 } from './typography';
import * as styles from './styles/CardComponent';
import { Colors } from './styles/Colors';

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

export interface ICardComponentProps {
  headerText: string;
  boxTitle: string;
  corner?: Corner;
  style?: React.CSSProperties;
}

export const CardComponent: React.FunctionComponent<ICardComponentProps> = (props) => {
  const {
    headerText,
    boxTitle,
    style,
    ...restProps
  } = props

  return (
    <div className={styles.CardHero}>
    <div className={styles.ComponentBox}>
      <div
        className={classnames(
          styles.CardComponentContainer,
        )}
        {...restProps}
      >
        <H4 style={{ color: Colors['Black Hole'] }}>
          {boxTitle}
        </H4>
      </div>
    </div>
    </div>
  )
}
