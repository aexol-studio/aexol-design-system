import * as React from 'react'
import * as classnames from 'classnames'
import { H3, P } from './typography'
import * as styles from './styles/CardComponentV2'
import { Colors } from './styles/Colors'
export const CardComponentV2 = props => {
  const {
    CardContentBoxText,
    boxTitle = 'Box Title',
    squareColor = 'Mars',
    style
  } = props
  return React.createElement(
    'div',
    { className: classnames(styles.CardComponentContainer), style: style },
    React.createElement(
      'div',
      { className: styles.Header },
      React.createElement(
        H3,
        {
          style: {
            fontWeight: 'bold',
            paddingLeft: 8,
            paddingTop: 4
          }
        },
        boxTitle
      )
    ),
    React.createElement(
      'div',
      { className: styles.rectangle },
      React.createElement('div', { className: styles.rectangle1 }),
      React.createElement('div', {
        className: styles.rectangle2,
        style: { backgroundColor: Colors[squareColor] }
      })
    ),
    React.createElement(
      'div',
      { className: styles.CardComponentContent },
      CardContentBoxText.object.map((el, index) => {
        return React.createElement(
          P,
          {
            style: {
              color: Colors.Androgyn
            },
            key: index
          },
          el.text
        )
      })
    )
  )
}
//# sourceMappingURL=CardComponentV2.js.map
