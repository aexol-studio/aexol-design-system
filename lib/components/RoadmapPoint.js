import * as React from 'react'
import * as classnames from 'classnames'
import * as icon from './icons_roadmap'
import * as styles from './styles/RoadmapStyle'
export const RoadmapPoint = props => {
  const {
    header,
    text,
    title,
    titlePosition,
    pointPosition,
    pointColor,
    done,
    style
  } = props
  const renderPoint = () => {
    const { pointColor = 'gradient', point = 'small', idx, done } = props
    if (done) {
      if (pointColor === 'blue') {
        if (point === 'small') {
          if (idx === 3 || idx === 5) {
            return React.createElement(icon.SmallPointBlueBottom, null)
          } else if (idx === 2 || idx === 6) {
            return React.createElement(icon.SmallPointBlueTop, null)
          } else {
            return React.createElement(icon.SmallPointBlue, null)
          }
        } else {
          if (idx === 3 || idx === 5) {
            return React.createElement(icon.BigPointBlueBottom, null)
          } else if (idx === 2 || idx === 6) {
            return React.createElement(icon.BigPointBlueTop, null)
          } else {
            return React.createElement(icon.BigPointBlue, null)
          }
        }
      } else if (pointColor === 'gradient') {
        if (point === 'small') {
          if (idx === 3 || idx === 5) {
            return React.createElement(icon.SmallPointGradientBottom, null)
          } else if (idx === 2 || idx === 6) {
            return React.createElement(icon.SmallPointGradientTop, null)
          } else {
            return React.createElement(icon.SmallPointGradient, null)
          }
        } else {
          if (idx === 3 || idx === 5) {
            return React.createElement(icon.BigPointGradientBottom, null)
          } else if (idx === 2 || idx === 6) {
            return React.createElement(icon.BigPointGradientTop, null)
          } else {
            return React.createElement(icon.BigPointGradient, null)
          }
        }
      }
    } else {
      if (pointColor === 'gradient') {
        if (idx === 3 || idx === 5) {
          return React.createElement(icon.SmallPointInactiveBottom, null)
        } else if (idx === 2 || idx === 6) {
          return React.createElement(icon.SmallPointInactiveTop, null)
        } else {
          return React.createElement(icon.SmallPointInactive, null)
        }
      } else if (pointColor === 'blue') {
        if (idx === 3 || idx === 5) {
          return React.createElement(icon.SmallPointInactiveWhiteBottom, null)
        } else if (idx === 2 || idx === 6) {
          return React.createElement(icon.SmallPointInactiveWhiteTop, null)
        } else {
          return React.createElement(icon.SmallPointInactiveWhite, null)
        }
      }
    }
  }
  return React.createElement(
    'div',
    { className: styles.Point },
    renderPoint(),
    React.createElement(
      'div',
      {
        className: classnames(
          classnames(styles.Popup, pointColor, pointPosition),
          classnames({
            long: text.length > 100,
            toplong: text.length > 100 && pointPosition === 'top'
          })
        ),
        style: style
      },
      React.createElement(
        'div',
        { className: classnames(styles.Header, pointColor) },
        header
      ),
      React.createElement(
        'div',
        { className: classnames(styles.Text, pointColor) },
        text
      )
    ),
    React.createElement(
      'div',
      {
        className: classnames(
          classnames(styles.Title, titlePosition, pointColor),
          classnames({
            todo: !done
          })
        )
      },
      title
    )
  )
}
//# sourceMappingURL=RoadmapPoint.js.map
