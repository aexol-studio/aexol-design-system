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
import * as styles from './styles/BlueTileStyles'
import { H1, P } from './typography'
import { Colors } from './styles/Colors'
export const BlueTile = props => {
  const {
      BlueTileHeader,
      BlueTileHeaderParagraph,
      envelope,
      ContactImg = require('../assets/images/ContactRequest1@2x.png'),
      isVisible,
      id
    } = props,
    restProps = __rest(props, [
      'BlueTileHeader',
      'BlueTileHeaderParagraph',
      'envelope',
      'ContactImg',
      'isVisible',
      'id'
    ])
  return React.createElement(
    'div',
    { className: classnames(styles.BlueTileMain), id: id },
    React.createElement(
      'div',
      Object.assign({ className: styles.BlueTileContainer }, restProps),
      React.createElement(
        'div',
        { className: styles.TileContent },
        React.createElement(
          'div',
          { className: styles.TileLeftContent },
          props.children
        ),
        React.createElement(
          'div',
          { className: styles.TileRightContent },
          isVisible &&
            React.createElement(
              'div',
              { className: styles.TileRightEvelope },
              React.createElement('img', {
                src: ContactImg,
                style: {
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }
              }),
              envelope
            ),
          React.createElement(
            'div',
            { className: styles.TileRightHeader },
            React.createElement(H1, null, BlueTileHeader)
          ),
          React.createElement(
            'div',
            { className: styles.TileRightParagraph },
            React.createElement(
              P,
              { style: { color: Colors.White } },
              BlueTileHeaderParagraph
            )
          )
        )
      )
    )
  )
}
//# sourceMappingURL=BlueTile.js.map
