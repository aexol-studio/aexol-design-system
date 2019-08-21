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
import { H1, H4 } from './typography'
import * as styles from './styles/NotFoundStyles'
import { Colors } from './styles/Colors'
const DEFAULT_H1 = 'Ooops!'
const DEFAULT_H1_TEXT = `Dont't Cry`
const DEFAULT_H4_TEXT = `What you're looking for could be somewhere under the sea.`
export const NotFound = props => {
  const { backColor = 'blue', style } = props,
    restProps = __rest(props, ['backColor', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: styles.NotFound,
        style: Object.assign(
          {
            backgroundImage:
              backColor === 'blue'
                ? `linear-gradient(to right top, #5D2EEB, #0091FF)`
                : Colors.Foggy
          },
          style
        )
      },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.TextContent },
      React.createElement(
        H1,
        {
          style: {
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }
        },
        DEFAULT_H1
      ),
      React.createElement(
        H1,
        {
          style: {
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }
        },
        DEFAULT_H1_TEXT
      ),
      React.createElement(
        H4,
        {
          style: {
            color: backColor === 'blue' ? Colors.White : Colors['Dark Side']
          }
        },
        DEFAULT_H4_TEXT
      )
    ),
    React.createElement('div', {
      className: styles.Img,
      style: {
        backgroundImage: `url(${require('../assets/images/Lost1.png')})`
      }
    })
  )
}
//# sourceMappingURL=NotFound.js.map
