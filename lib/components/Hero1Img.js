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
import { H3, H4 } from './typography'
import { Button } from './Button'
import * as classnames from 'classnames'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'
export const Hero1Img = props => {
  const {
      headerText,
      paragraphText,
      paragraphColor = 'Androgyn',
      paragraphTextLength = 'short',
      buttonText,
      buttonOnClick,
      imgFile,
      imgPosition = 'bottom',
      height,
      style,
      imgStyle
    } = props,
    restProps = __rest(props, [
      'headerText',
      'paragraphText',
      'paragraphColor',
      'paragraphTextLength',
      'buttonText',
      'buttonOnClick',
      'imgFile',
      'imgPosition',
      'height',
      'style',
      'imgStyle'
    ])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: styles.Hero,
        style: Object.assign({ height: height ? height : '100%' }, style)
      },
      restProps
    ),
    React.createElement(
      'div',
      { className: styles.HeroContainer },
      React.createElement(
        'div',
        { className: styles.HeroContent },
        React.createElement(
          'div',
          { className: styles.TextContent },
          React.createElement(
            'div',
            { className: styles.HeroHeader },
            headerText
          ),
          paragraphTextLength === 'short' &&
            React.createElement(
              H3,
              {
                style: {
                  color: Colors[paragraphColor],
                  marginBottom: 16,
                  lineHeight: '34px'
                }
              },
              paragraphText
            ),
          paragraphTextLength === 'long' &&
            React.createElement(
              H4,
              {
                style: {
                  color: Colors[paragraphColor],
                  marginBottom: 16
                }
              },
              paragraphText
            ),
          React.createElement(Button, { onClick: buttonOnClick }, buttonText)
        ),
        React.createElement(
          'div',
          { className: classnames(styles.Img, imgPosition) },
          imgFile
        )
      )
    )
  )
}
//# sourceMappingURL=Hero1Img.js.map
