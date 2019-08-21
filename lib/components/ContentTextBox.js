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
import * as styles from './styles/ContentStyles'
import { H2, P } from './typography'
import { Link } from './Link'
import * as classnames from 'classnames'
export const ContentTextBox = props => {
  const {
      title,
      text,
      linkText = 'Read Article...',
      linkHref,
      linkTarget,
      tileView = false,
      style
    } = props,
    restProps = __rest(props, [
      'title',
      'text',
      'linkText',
      'linkHref',
      'linkTarget',
      'tileView',
      'style'
    ])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: classnames({
          [styles.ContentTextBoxContainer]: true,
          tile: tileView
        }),
        style: style
      },
      restProps
    ),
    React.createElement(H2, { style: { marginBottom: 17 } }, title),
    React.createElement(
      P,
      { style: { marginBottom: 37, overflowY: 'auto' } },
      text
    ),
    React.createElement(Link, {
      text: linkText,
      link: linkHref,
      target: linkTarget
    })
  )
}
//# sourceMappingURL=ContentTextBox.js.map
