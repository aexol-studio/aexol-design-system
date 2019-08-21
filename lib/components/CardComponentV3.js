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
import * as styles from './styles/CardComponentV3'
import { Colors } from './styles/Colors'
export const CardComponentV3 = props => {
  const { boxText, boxTitle, style, icon } = props,
    restProps = __rest(props, ['boxText', 'boxTitle', 'style', 'icon'])
  return React.createElement(
    'div',
    Object.assign(
      { className: classnames(styles.CardComponentContainer), style: style },
      restProps
    ),
    icon && React.createElement('div', { className: styles.Icon }, icon),
    React.createElement(
      H4,
      { style: { marginBottom: 22, textAlign: 'center' } },
      boxTitle
    ),
    React.createElement(
      PMedium,
      { style: { textAlign: 'center', color: Colors.Androgyn } },
      boxText
    )
  )
}
//# sourceMappingURL=CardComponentV3.js.map
