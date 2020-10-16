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
import * as styles from './styles/LinkStyles'
export const Link = props => {
  const { text, link, target, strong = false, disabled = false, style } = props,
    restProps = __rest(props, [
      'text',
      'link',
      'target',
      'strong',
      'disabled',
      'style'
    ])
  return React.createElement(
    'a',
    Object.assign(
      {
        className: classnames({
          [styles.LinkContainer]: true,
          strong: strong,
          disabled: disabled
        }),
        href: link,
        title: text,
        target: target,
        style: style
      },
      restProps
    ),
    text
  )
}
//# sourceMappingURL=Link.js.map
