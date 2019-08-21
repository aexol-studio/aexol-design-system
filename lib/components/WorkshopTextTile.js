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
import { PMedium } from './typography'
import * as styles from './styles/WorkshopTileStyles'
import { Colors } from './styles/Colors'
export const WorkshopTextTile = props => {
  const { text, corner = 'topLeft', style } = props,
    restProps = __rest(props, ['text', 'corner', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: classnames(styles.WorkshopTextTileContainer, corner),
        style: style
      },
      restProps
    ),
    React.createElement(
      PMedium,
      { style: { color: Colors['Black Hole'] } },
      text
    )
  )
}
//# sourceMappingURL=WorkshopTextTile.js.map
