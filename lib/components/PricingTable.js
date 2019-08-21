import * as React from 'react'
import * as styles from './styles/PricingTable'
import * as cx from 'classnames'
import { H3, PMedium, P } from './typography'
import Button from './Button'
export const PricingTable = props => {
  const { title, plans, options } = props
  const computedStyle = {
    gridTemplateColumns: `${styles.TITLE_WIDTH}px ${plans.length}fr`
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: cx(styles.Main(plans.length)), style: computedStyle },
      React.createElement(
        'div',
        { className: styles.PlanString(plans.length) },
        React.createElement(H3, { style: { fontWeight: 300 } }, title)
      ),
      React.createElement(
        'div',
        { className: styles.PlansHeaders(plans.length) },
        plans.map((p, index) =>
          React.createElement(
            'div',
            { key: index, className: styles.PlanHeader(plans.length) },
            React.createElement(
              'div',
              { className: styles.PlanHeaderTitle },
              React.createElement(H3, null, p.name)
            ),
            React.createElement(
              'div',
              { className: styles.PlanHeaderSubtitle },
              React.createElement(PMedium, null, p.subTitle)
            ),
            React.createElement(
              'div',
              { className: styles.PlanHeaderOptions(plans.length) },
              options
                .filter(o => o.values[index])
                .map((o, index) =>
                  React.createElement(
                    'div',
                    { className: styles.PlanHeaderOption, key: index },
                    React.createElement(
                      P,
                      {
                        style: {
                          marginRight: 10
                        }
                      },
                      o.name
                    ),
                    React.createElement(PMedium, null, o.values[index])
                  )
                )
            ),
            React.createElement(
              'div',
              { className: styles.PlanHeaderDescription },
              React.createElement(P, null, p.description)
            ),
            React.createElement(
              Button,
              { onClick: p.onClick, style: { marginTop: 'auto' } },
              p.action
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: styles.PricingHiderResoponsive(plans.length) },
      options.map(({ name, values }, index) =>
        React.createElement(
          'div',
          { className: styles.PlanLine, style: computedStyle, key: index },
          React.createElement(
            'div',
            { className: styles.PlanOptionTitle, key: index },
            React.createElement(P, null, name)
          ),
          React.createElement(
            'div',
            { className: styles.PlanOptions },
            values
              .slice(0, plans.length)
              .map((ov, index) =>
                React.createElement(
                  'div',
                  { className: styles.PlanOption, key: index },
                  React.createElement(P, null, ov)
                )
              )
          )
        )
      ),
      React.createElement(
        'div',
        { className: styles.PlanActionLine, style: computedStyle },
        React.createElement(
          'div',
          { className: styles.PlanActions },
          plans.map((p, index) =>
            React.createElement(
              'div',
              { className: styles.PlanOption, key: index },
              React.createElement(Button, { onClick: p.onClick }, p.action)
            )
          )
        )
      )
    )
  )
}
//# sourceMappingURL=PricingTable.js.map
