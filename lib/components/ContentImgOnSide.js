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
export const ContentImgOnSide = props => {
  const {
      title,
      text,
      linkText = 'Read Article...',
      linkHref,
      linkTarget,
      imgSide = 'right',
      imgFile,
      style
    } = props,
    restProps = __rest(props, [
      'title',
      'text',
      'linkText',
      'linkHref',
      'linkTarget',
      'imgSide',
      'imgFile',
      'style'
    ])
  return React.createElement(
    'div',
    Object.assign(
      { className: styles.ContentImgOnSide, style: style },
      restProps
    ),
    imgSide === 'right' &&
      React.createElement(
        'div',
        { className: styles.ContentTextContainer },
        React.createElement(ContentTextBox, {
          title: title,
          text: text,
          linkText: linkText,
          linkHref: linkHref,
          linkTarget: linkTarget
        })
      ),
    React.createElement('div', {
      className: styles.ContentImg,
      style: {
        backgroundImage: `url(${imgFile})`
      }
    }),
    imgSide === 'left' &&
      React.createElement(
        'div',
        { className: styles.ContentTextContainer },
        React.createElement(ContentTextBox, {
          title: title,
          text: text,
          linkText: linkText,
          linkHref: linkHref,
          linkTarget: linkTarget
        })
      )
  )
}
//# sourceMappingURL=ContentImgOnSide.js.map
