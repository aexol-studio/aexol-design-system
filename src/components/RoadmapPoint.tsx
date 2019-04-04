import * as React from 'react'
import * as classnames from 'classnames'
import * as icon from './icons_roadmap'
import * as styles from './styles/RoadmapStyle'

type Point = 'small' | 'big'
type Color = 'gradient' | 'blue'
type Position = 'bottom' | 'topRight' | 'top'

export interface IRoadmapPointProps {
  idx: number
  point?: Point
  pointColor?: Color
  done: boolean
  title: string
  titlePosition?: Position
  header: string
  text: string
  style?: React.CSSProperties
}

export const RoadmapPoint: React.FunctionComponent<
  IRoadmapPointProps
> = props => {
  const { header, text, title, titlePosition, pointColor, done, style } = props

  const renderPoint = () => {
    const { pointColor = 'gradient', point = 'small', idx, done } = props
    if (done) {
      if (pointColor === 'blue') {
        if (point === 'small') {
          if (idx === 3 || idx === 5) {
            return <icon.SmallPointBlueBottom />
          } else if (idx === 2 || idx === 6) {
            return <icon.SmallPointBlueTop />
          } else {
            return <icon.SmallPointBlue />
          }
        } else {
          if (idx === 3 || idx === 5) {
            return <icon.BigPointBlueBottom />
          } else if (idx === 2 || idx === 6) {
            return <icon.BigPointBlueTop />
          } else {
            return <icon.BigPointBlue />
          }
        }
      } else if (pointColor === 'gradient') {
        if (point === 'small') {
          if (idx === 3 || idx === 5) {
            return <icon.SmallPointGradientBottom />
          } else if (idx === 2 || idx === 6) {
            return <icon.SmallPointGradientTop />
          } else {
            return <icon.SmallPointGradient />
          }
        } else {
          if (idx === 3 || idx === 5) {
            return <icon.BigPointGradientBottom />
          } else if (idx === 2 || idx === 6) {
            return <icon.BigPointGradientTop />
          } else {
            return <icon.BigPointGradient />
          }
        }
      }
    } else {
      if (pointColor === 'gradient') {
        if (idx === 3 || idx === 5) {
          return <icon.SmallPointInactiveBottom />
        } else if (idx === 2 || idx === 6) {
          return <icon.SmallPointInactiveTop />
        } else {
          return <icon.SmallPointInactive />
        }
      } else if (pointColor === 'blue') {
        if (idx === 3 || idx === 5) {
          return <icon.SmallPointInactiveWhiteBottom />
        } else if (idx === 2 || idx === 6) {
          return <icon.SmallPointInactiveWhiteTop />
        } else {
          return <icon.SmallPointInactiveWhite />
        }
      }
    }
  }

  return (
    <div className={styles.Point}>
      {renderPoint()}
      <div className={classnames(styles.Popup, pointColor)} style={style}>
        <div className={classnames(styles.Header, pointColor)}>{header}</div>
        <div className={classnames(styles.Text, pointColor)}>{text}</div>
      </div>
      <div
        className={classnames(
          classnames(styles.Title, titlePosition, pointColor),
          classnames({
            todo: !done
          })
        )}
      >
        {title}
      </div>
    </div>
  )
}
