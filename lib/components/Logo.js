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
import * as styles from './styles/LogoStyles'
export const Logo = props => {
  const { width, logoURL, style } = props,
    restProps = __rest(props, ['width', 'logoURL', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: styles.LogoContainer,
        style: Object.assign({ width: width ? `${width}px` : '100%' }, style)
      },
      restProps
    ),
    React.createElement('img', {
      className: styles.Logo,
      src: logoURL,
      alt: 'Logo'
    })
  )
}
//# sourceMappingURL=Logo.js.map
