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
import { BrandCard } from './BrandCard'
import { PBold, H3 } from './typography'
import * as styles from './styles/BrandStyles'
import { Colors } from './styles/Colors'
const DEFAULT_SMALL_TEXT = 'We colaborate with ambitious brands and people'
const DEFAULT_BIG_TEXT = 'Let’s create something great together'
export const BrandBar = props => {
  const {
      BrandBar,
      smallText = DEFAULT_SMALL_TEXT,
      bigText = DEFAULT_BIG_TEXT,
      style
    } = props,
    restProps = __rest(props, ['BrandBar', 'smallText', 'bigText', 'style'])
  const renderCards = (el, idx) => {
    return React.createElement(BrandCard, {
      BrandCardLogo: el.logo,
      BrandCardLink: el.link,
      key: idx
    })
  }
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.BrandBarContainer, style: style },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.BrandLogos },
      React.createElement('div', { className: styles.BrandBarBackground }),
      BrandBar.map((el, idx) => renderCards(el, idx))
    ),
    React.createElement(
      PBold,
      { style: { color: Colors['Ancient Stone'], textAlign: 'center' } },
      smallText
    ),
    React.createElement(
      H3,
      { style: { color: Colors['Dark Side'], textAlign: 'center' } },
      bigText
    )
  )
}
//# sourceMappingURL=BrandBar.js.map
