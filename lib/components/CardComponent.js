var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import * as React from 'react'
import * as classnames from 'classnames'
import { H4, PMedium } from './typography'
import * as styles from './styles/CardComponent'
import { Colors } from './styles/Colors'
export const CardComponent = props => {
  const { boxText, boxTitle, barColor = 'Mars', style } = props,
    restProps = __rest(props, ['boxText', 'boxTitle', 'barColor', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      { className: classnames(styles.CardComponentContainer), style: style },
      restProps
    ),
    React.createElement(H4, { style: { marginBottom: 15 } }, boxTitle),
    React.createElement(
      'div',
      { className: styles.rectangle },
      React.createElement('div', { className: styles.rectangle1 }),
      React.createElement('div', {
        className: styles.rectangle2,
        style: { backgroundColor: Colors[barColor] }
      })
    ),
    React.createElement(
      PMedium,
      { style: { marginTop: 19, color: Colors.Androgyn } },
      boxText
    )
  )
}
//# sourceMappingURL=CardComponent.js.map
