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
import { CommunityCard } from './CommunityCard'
import { H2, H4, P } from './typography'
import { Colors } from './styles/Colors'
import * as styles from './styles/PoweredCommunityStyles'
const DEFAULT_BIG_TEXT =
  'Start using GraphQL today and improve your workflow inmediately.'
export const PoweredCommunity = props => {
  const { header, cards, smallText, bigText = DEFAULT_BIG_TEXT, style } = props,
    restProps = __rest(props, [
      'header',
      'cards',
      'smallText',
      'bigText',
      'style'
    ])
  const renderCards = (el, idx) => {
    return React.createElement(CommunityCard, {
      val: el.val,
      description: el.description,
      backColor: el.backColor,
      key: idx,
      icon: el.icon,
      style: el.style
    })
  }
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.PoweredCommunityContainer, style: style },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.Header },
      React.createElement('img', {
        src: require('../assets/images/logoText.png'),
        className: styles.HeaderImage
      }),
      React.createElement('img', {
        src: require('../assets/images/logo.png'),
        className: styles.HeaderImagePhone
      }),
      React.createElement('div', { className: styles.HeaderLine }),
      React.createElement(H2, { style: { color: Colors.Ashes } }, header)
    ),
    React.createElement(
      'div',
      { className: styles.Cards },
      cards.map((el, idx) => renderCards(el, idx))
    ),
    bigText &&
      React.createElement(
        H4,
        {
          style: {
            color: Colors['Dark Side'],
            marginBottom: 16,
            textAlign: 'center'
          }
        },
        bigText
      ),
    smallText &&
      React.createElement(
        P,
        { style: { color: Colors['Ancient Stone'], textAlign: 'center' } },
        smallText
      )
  )
}
//# sourceMappingURL=PoweredCommunity.js.map
