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
import { H1, H3 } from './typography'
import { Button } from './Button'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'
export const HeroImgOnBottom = props => {
  const {
      headerText,
      paragraphText,
      buttonText,
      buttonOnClick,
      imgFile1,
      imgFile2,
      imgFile3,
      imgFile4,
      height,
      style
    } = props,
    restProps = __rest(props, [
      'headerText',
      'paragraphText',
      'buttonText',
      'buttonOnClick',
      'imgFile1',
      'imgFile2',
      'imgFile3',
      'imgFile4',
      'height',
      'style'
    ])
  return React.createElement(
    'div',
    Object.assign(
      {
        className: styles.HeroImgOnBottom,
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
          { className: styles.TextContent3 },
          React.createElement(
            H1,
            { style: { color: Colors['Black Hole'], marginBottom: 6 } },
            headerText
          ),
          React.createElement(
            H3,
            { style: { color: Colors.Androgyn, marginBottom: 16 } },
            paragraphText
          ),
          React.createElement(Button, { onClick: buttonOnClick }, buttonText),
          React.createElement(
            'div',
            { className: styles.ImgContent3 },
            React.createElement('div', { className: styles.Img3 }, imgFile1),
            React.createElement('div', { className: styles.Img4 }, imgFile2),
            React.createElement('div', { className: styles.Img4 }, imgFile3),
            React.createElement('div', { className: styles.Img3 }, imgFile4)
          )
        )
      )
    )
  )
}
//# sourceMappingURL=HeroImgOnBottom.js.map
