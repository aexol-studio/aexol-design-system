import * as React from 'react'
import * as classnames from 'classnames'
import { PFooterTitle } from './typography'
import * as styles from './styles/FooterStyle'
import { GraphQLlogo } from './icons'
export const Footer = props => {
  const {
    FooterColumnsTxt,
    backgroundColor = 'white',
    copyright,
    logo = React.createElement(GraphQLlogo, null),
    showLogo
  } = props
  return React.createElement(
    'div',
    { className: classnames(styles.FooterMain, backgroundColor) },
    React.createElement(
      'div',
      { className: styles.FooterContainer },
      React.createElement(
        'div',
        { className: styles.rectangleTopDiv },
        showLogo &&
          React.createElement(
            'div',
            { className: styles.rectangleTopLogo },
            logo
          ),
        React.createElement('div', { className: styles.rectangleTop })
      ),
      React.createElement(
        'div',
        { className: styles.FooterContent },
        FooterColumnsTxt.objects.map((el, idxt) => {
          return React.createElement(
            'div',
            { className: styles.FooterContentColumn, key: idxt },
            React.createElement(
              'div',
              null,
              React.createElement(PFooterTitle, null, el.title)
            ),
            React.createElement(
              'div',
              { className: styles.PFooterNameDiv },
              el.objects.map((o, idx) =>
                React.createElement(
                  'a',
                  {
                    className: classnames(styles.PFooterName, backgroundColor),
                    href: o.link,
                    key: idx
                  },
                  o.name
                )
              )
            )
          )
        })
      ),
      React.createElement(
        'div',
        { className: styles.rectangleDownDiv },
        React.createElement('div', { className: styles.rectangleDown }),
        React.createElement(
          'p',
          { className: styles.rectangleDownCopyright },
          copyright
        )
      )
    )
  )
}
//# sourceMappingURL=Footer.js.map
