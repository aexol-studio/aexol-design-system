import * as React from 'react'
import * as classnames from 'classnames'
import { H4, PMedium } from './typography'
import * as styles from './styles/CardComponentV3'
import { Colors } from './styles/Colors'

export interface ICardComponentProps {
  boxText: string
  boxTitle: string
  icon?: JSX.Element
  style?: React.CSSProperties
}

export const CardComponentV3: React.FunctionComponent<
  ICardComponentProps
> = props => {
  const { boxText, boxTitle, style, icon, ...restProps } = props

  return (
    <div
      className={classnames(styles.CardComponentContainer)}
      style={style}
      {...restProps}
    >
      {icon && <div className={styles.Icon}>{icon}</div>}
      <H4 style={{ marginBottom: 22, textAlign: 'center' }}>{boxTitle}</H4>
      <PMedium style={{ textAlign: 'center', color: Colors.Androgyn }}>
        {boxText}
      </PMedium>
    </div>
  )
}
