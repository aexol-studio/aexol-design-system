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
import * as styles from './styles/BrandStyles'
export const BrandCard = props => {
  const { BrandCardLogo, BrandCardLink, style } = props,
    restProps = __rest(props, ['BrandCardLogo', 'BrandCardLink', 'style'])
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.BrandCardContainer, style: style },
      restProps
    ),
    BrandCardLink &&
      React.createElement(
        'a',
        { className: styles.BrandLink, href: BrandCardLink },
        React.createElement('img', {
          className: styles.BrandCard,
          src: BrandCardLogo,
          alt: 'BrandLogo'
        })
      ),
    !BrandCardLink &&
      React.createElement('img', {
        className: styles.BrandCard,
        src: BrandCardLogo,
        alt: 'BrandLogo'
      })
  )
}
//# sourceMappingURL=BrandCard.js.map
