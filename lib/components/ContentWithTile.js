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
import * as styles from './styles/ContentStyles'
import { ContentTextBox } from './ContentTextBox'
import * as classnames from 'classnames'
export const ContentWithTile = props => {
  const {
      title,
      text,
      linkText = 'Read Article...',
      linkHref,
      linkTarget,
      violetBakground = false,
      imgFile,
      style
    } = props,
    restProps = __rest(props, [
      'title',
      'text',
      'linkText',
      'linkHref',
      'linkTarget',
      'violetBakground',
      'imgFile',
      'style'
    ])
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.ContentWithTile, style: style },
      restProps
    ),
    React.createElement('div', {
      className: styles.ContentTileImg,
      style: {
        backgroundImage: `url(${imgFile})`
      }
    }),
    React.createElement('div', {
      className: classnames({
        [styles.ContentRightBar]: true,
        violet: violetBakground
      })
    }),
    React.createElement(
      'div',
      { className: styles.ContentContainer },
      React.createElement(
        'div',
        { className: styles.ContentTileTextBox },
        React.createElement(ContentTextBox, {
          title: title,
          text: text,
          linkText: linkText,
          linkHref: linkHref,
          tileView: true,
          linkTarget: linkTarget
        })
      )
    )
  )
}
//# sourceMappingURL=ContentWithTile.js.map
