import * as React from 'react'
import * as classnames from 'classnames'
import { CheckBox } from './icons'
import * as styles from './styles/CheckboxStyles'
export class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleOnClick = value => {
      if (this.state.value !== value) {
        this.setState({
          value: value
        })
        if (this.props.onChange) {
          this.props.onChange(value)
        }
      }
    }
    this.renderElements = () => {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'div',
          {
            className: classnames(
              classnames({
                [styles.CheckboxElement]: true,
                active: this.state.value,
                on: true
              }),
              classnames(this.props.shape)
            ),
            onClick: e => this.handleOnClick(!this.state.value)
          },
          React.createElement(CheckBox, { fill: 'Super Nova' })
        ),
        React.createElement(
          'p',
          { className: styles.CheckboxParagraph },
          this.props.checkboxParagraph
        )
      )
    }
    this.state = {
      value: props.value || false
    }
  }
  render() {
    return React.createElement(
      'div',
      { className: styles.Checkbox },
      this.renderElements()
    )
  }
}
//# sourceMappingURL=Checkbox.js.map
