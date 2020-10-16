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
import { Colors } from './styles/Colors'
import * as styles from './styles/WorkshopDayStyles'
export const WorkshopDay = props => {
  const { day, list, style, headerColor = 'Floating Mandarines' } = props,
    restProps = __rest(props, ['day', 'list', 'style', 'headerColor'])
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.WorkshopDayContainer, style: style },
      restProps
    ),
    React.createElement(
      'div',
      {
        className: styles.WorkshopDayHeader,
        style: { backgroundColor: Colors[headerColor] }
      },
      'Day ',
      day
    ),
    React.createElement(
      'div',
      { className: styles.List },
      list.map((el, idx) => {
        return React.createElement(
          'div',
          { key: idx, className: styles.ListEl },
          el
        )
      })
    )
  )
}
//# sourceMappingURL=WorkshopDay.js.map
