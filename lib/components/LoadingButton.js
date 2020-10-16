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
import * as styles from './styles/ButtonStyle'
const DEFAULT_WIDTH = 168
const DEFAULT_HEIGHT = 40
export const LoadingButton = props => {
  const {
      size = 'default',
      shape = 'round',
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      style
    } = props,
    restProps = __rest(props, ['size', 'shape', 'width', 'height', 'style'])
  return React.createElement(
    'button',
    Object.assign(
      {
        className: classnames(styles.Button, 'primary', shape, size),
        style: Object.assign({ width: width, height: height }, style)
      },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.Loader },
      React.createElement(
        'div',
        { className: styles.Wave },
        new Array(3)
          .fill(0)
          .map((a, i) =>
            React.createElement('div', { key: i, className: styles.Dot })
          )
      )
    )
  )
}
export default LoadingButton
//# sourceMappingURL=LoadingButton.js.map
