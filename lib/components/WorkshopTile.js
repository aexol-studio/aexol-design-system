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
import * as styles from './styles/WorkshopTileStyles'
export const WorkshopTile = props => {
  const { day, list, corner = 'none', style } = props,
    restProps = __rest(props, ['day', 'list', 'corner', 'style'])
  const checkDay = () => {
    switch (props.day) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      default:
        return 'rd'
    }
  }
  return React.createElement(
    'div',
    Object.assign(
      {
        className: classnames(styles.WorkshopTileContainer, corner),
        style: style
      },
      restProps
    ),
    React.createElement(
      'div',
      { className: classnames(styles.SideBar, corner) },
      React.createElement(
        'div',
        { className: styles.SideBarText },
        React.createElement(
          'div',
          { className: styles.TextFirstLine },
          day,
          React.createElement(
            'span',
            { className: styles.DayEnding },
            checkDay()
          )
        ),
        React.createElement('div', { className: styles.Day }, 'day')
      )
    ),
    React.createElement(
      'div',
      { className: classnames(styles.List, corner) },
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
//# sourceMappingURL=WorkshopTile.js.map
