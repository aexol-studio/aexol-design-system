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
import classnames from 'classnames'
import { Button } from '../components'
import * as styles from './styles/NavBarStyles'
export const BAR_NUMBER = 6
export class NavBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = e => this.props.onClick(e)
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
      { color, onClick, logo, logoHref, buttonText, style } = _a,
      restProps = __rest(_a, [
        'color',
        'onClick',
        'logo',
        'logoHref',
        'buttonText',
        'style'
      ])
    return React.createElement(
      'div',
      Object.assign(
        { className: classnames(styles.NavBar, color), style: style },
        restProps
      ),
      React.createElement(
        'div',
        {
          className: classnames({
            [styles.Container]: true,
            open: this.state.open
          })
        },
        React.createElement(
          'div',
          {
            className: classnames({
              [styles.Hamburger]: true,
              open: this.state.open
            }),
            onClick: e => this.handleOpen(e)
          },
          new Array(BAR_NUMBER)
            .fill(0)
            .map((a, i) =>
              React.createElement('div', {
                key: i,
                className: classnames(styles.Bar, color)
              })
            )
        ),
        React.createElement(
          'a',
          { className: styles.LogoContainer, href: logoHref },
          logo
        ),
        React.createElement(
          'div',
          { className: styles.ContentContainer },
          React.createElement(
            'div',
            { className: classnames(styles.LinkContainer, color) },
            this.props.children
          ),
          React.createElement(
            'div',
            { className: styles.ButtonContainer },
            React.createElement(
              Button,
              {
                onClick: e => this.handleClick(e),
                type:
                  color === 'black'
                    ? 'secondary3'
                    : color === 'light'
                    ? 'secondary2'
                    : 'secondary'
              },
              buttonText
            )
          )
        )
      )
    )
  }
}
//# sourceMappingURL=NavBar.js.map
