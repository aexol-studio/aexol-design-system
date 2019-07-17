import * as React from 'react'
import * as classnames from 'classnames'
import { H3, P } from './typography'
import * as styles from './styles/CardComponentV2'
import { Colors } from './styles/Colors'

type CardContentBoxText = {
  object: Array<{
    text: string
  }>
}

export interface ICardComponentProps {
  CardContentBoxText: CardContentBoxText
  boxTitle?: string
  squareColor?: keyof typeof Colors
  style?: React.CSSProperties
}

export const CardComponentV2: React.FunctionComponent<
  ICardComponentProps
> = props => {
  const {
    CardContentBoxText,
    boxTitle = 'Box Title',
    squareColor = 'Mars',
    style
  } = props

  return (
    <div className={classnames(styles.CardComponentContainer)} style={style}>
      <div className={styles.Header}>
        <H3
          style={{
            fontWeight: 'bold',
            paddingLeft: 8,
            paddingTop: 4
          }}
        >
          {boxTitle}
        </H3>
      </div>
      <div className={styles.rectangle}>
        <div className={styles.rectangle1} />
        <div
          className={styles.rectangle2}
          style={{ backgroundColor: Colors[squareColor] }}
        />
      </div>
      <div className={styles.CardComponentContent}>
        {CardContentBoxText.object.map((el, index) => {
          return (
            <P
              style={{
                color: Colors.Androgyn
              }}
              key={index}
            >
              {el.text}
            </P>
          )
        })}
      </div>
    </div>
  )
}
