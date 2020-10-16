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
import * as styles from './styles/FoldingBoxStyles'
import classnames from 'classnames'
import { PMedium } from './typography'
import { Colors } from './styles/Colors'
export class FoldingBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleOpen = e => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
    this.state = {
      open: false
    }
  }
  render() {
    const _a = this.props,
      { title, text, style } = _a,
      restProps = __rest(_a, ['title', 'text', 'style'])
    return React.createElement(
      'div',
      Object.assign(
        { className: styles.FoldingContainer, style: style },
        restProps
      ),
      React.createElement(
        'div',
        { className: styles.TitleBox, onClick: this.handleOpen },
        React.createElement('div', {
          className: classnames({
            [styles.Arrow]: true,
            open: this.state.open
          }),
          onClick: this.handleOpen
        }),
        React.createElement(
          PMedium,
          { style: { color: Colors.Lead, width: 330 } },
          title
        )
      ),
      React.createElement(
        'div',
        {
          className: classnames({
            [styles.Content]: true,
            open: this.state.open
          })
        },
        React.createElement(PMedium, { style: { color: Colors.Ashes } }, text)
      )
    )
  }
}
//# sourceMappingURL=FoldingBox.js.map
