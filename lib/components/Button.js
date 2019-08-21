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
import * as styles from './styles/ButtonStyle'
const DEFAULT_WIDTH = 168
const DEFAULT_HEIGHT = 40
export const Button = props => {
  const {
      type = 'primary',
      size = 'default',
      shape = 'round',
      disabled = false,
      width = DEFAULT_WIDTH,
      height = DEFAULT_HEIGHT,
      icon,
      style,
      onClick,
      href,
      target
    } = props,
    restProps = __rest(props, [
      'type',
      'size',
      'shape',
      'disabled',
      'width',
      'height',
      'icon',
      'style',
      'onClick',
      'href',
      'target'
    ])
  const handleClick = e => {
    if (onClick) {
      onClick(e.currentTarget)
    }
  }
  return React.createElement(
    'a',
    Object.assign(
      {
        className: classnames(
          classnames(styles.Button, type, shape, size),
          classnames({
            disabled: disabled
          })
        ),
        href: href,
        target: target,
        onClick: handleClick,
        style: Object.assign({ width: width, height: height }, style)
      },
      restProps
    ),
    React.createElement(
      React.Fragment,
      null,
      icon,
      React.createElement(PMedium, null, props.children)
    )
  )
}
export default Button
//# sourceMappingURL=Button.js.map
