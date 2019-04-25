import * as React from 'react'
import * as classnames from 'classnames'
import { H4, PMedium } from './typography'
import * as styles from './styles/CardComponent'
import { Colors } from './styles/Colors'

export interface ICardComponentProps {
  boxText: string
  boxTitle: string
  barColor?: keyof typeof Colors
  style?: React.CSSProperties
}

export const CardComponent: React.FunctionComponent<
  ICardComponentProps
> = props => {
  const { boxText, boxTitle, barColor = 'Mars', style, ...restProps } = props

  return (
    <div
      className={classnames(styles.CardComponentContainer)}
      style={style}
      {...restProps}
    >
      <H4 style={{ marginBottom: 15 }}>{boxTitle}</H4>
      <div className={styles.rectangle}>
        <div className={styles.rectangle1} />
        <div
          className={styles.rectangle2}
          style={{ backgroundColor: Colors[barColor] }}
        />
      </div>
      <PMedium style={{ marginTop: 19, color: Colors.Androgyn }}>
        {boxText}
      </PMedium>
    </div>
  )
}
