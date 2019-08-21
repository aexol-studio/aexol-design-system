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
import * as styles from './styles/PoweredCommunityStyles'
import { Colors } from './styles/Colors'
import { H3 } from './typography'
export const CommunityCard = props => {
  const { val, description, backColor, icon, style } = props,
    restProps = __rest(props, [
      'val',
      'description',
      'backColor',
      'icon',
      'style'
    ])
  const renderDescription = () => {
    const descript = props.description.split(props.val)
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'div',
        { style: { fontSize: 28, lineHeight: '28px' } },
        descript[0]
      ),
      React.createElement(
        H3,
        { style: { display: 'inline-block' } },
        props.val
      ),
      descript[1]
    )
  }
  return React.createElement(
    'div',
    Object.assign(
      {
        className: styles.CommunityCardContainer,
        style: Object.assign({ backgroundColor: Colors[backColor] }, style)
      },
      restProps
    ),
    React.createElement('div', { className: styles.Icon }, icon),
    React.createElement(
      'div',
      { className: styles.CardDescript },
      renderDescription()
    )
  )
}
//# sourceMappingURL=CommunityCard.js.map
