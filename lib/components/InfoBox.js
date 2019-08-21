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
import * as styles from './styles/InfoBoxStyles'
import { Colors } from './styles/Colors'
import { Link } from '../components'
export const InfoBox = props => {
  const { title, text, linkText, link, style } = props,
    restProps = __rest(props, ['title', 'text', 'linkText', 'link', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      { className: classnames(styles.InfoBoxContainer), style: style },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.TitleBox },
      React.createElement(H4, { style: { color: Colors.White } }, title)
    ),
    React.createElement(
      'div',
      { className: styles.ContentBox },
      React.createElement(
        PMedium,
        { style: { marginBottom: 8, color: Colors.Androgyn } },
        text
      ),
      linkText &&
        link &&
        React.createElement(Link, { link: link, text: linkText })
    )
  )
}
//# sourceMappingURL=InfoBox.js.map
