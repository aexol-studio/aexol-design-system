import * as React from 'react'
import { H1, H4 } from './typography'
import * as styles from './styles/NotFoundStyles'
import { Colors } from './styles/Colors'

type color = 'blue' | 'grey'

export interface INotFoundProps {
  backColor?: color
  style?: React.CSSProperties
}

const DEFAULT_H1 = 'Ooops!'
const DEFAULT_H1_TEXT = `Dont't Cry`
const DEFAULT_H4_TEXT = `What you're looking for could be somewhere under the sea.`

export const NotFound: React.FunctionComponent<INotFoundProps> = props => {
  const { backColor = 'blue', style, ...restProps } = props

  return (
    <div
      className={styles.NotFound}
      style={{
        backgroundImage:
          backColor === 'blue'
            ? `linear-gradient(to right top, #5D2EEB, #0091FF)`
            : Colors.Foggy,
        ...style
      }}
      {...restProps}
    >
      <div className={styles.TextContent}>
        <H1
          style={{
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }}
        >
          {DEFAULT_H1}
        </H1>
        <H1
          style={{
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }}
        >
          {DEFAULT_H1_TEXT}
        </H1>
        <H4
          style={{
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }}
        >
          {DEFAULT_H4_TEXT}
        </H4>
      </div>
      <div
        className={styles.Img}
        style={{
          backgroundImage: `url(${require('../assets/images/Lost1.png')})`
        }}
      />
    </div>
  )
}
