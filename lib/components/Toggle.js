import * as React from 'react'
import * as classnames from 'classnames'
import { Close, Check } from './icons'
import * as styles from './styles/ToggleStyle'
export class Toggle extends React.PureComponent {
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
                [styles.ToggleElement]: true,
                active: this.state.value,
                on: true
              }),
              classnames(this.props.shape)
            ),
            onClick: e => this.handleOnClick(true)
          },
          React.createElement(Check, { fill: 'White' })
        ),
        React.createElement(
          'div',
          {
            className: classnames(
              classnames({
                [styles.ToggleElement]: true,
                active: !this.state.value,
                off: true
              }),
              classnames(this.props.shape)
            ),
            onClick: e => this.handleOnClick(false)
          },
          React.createElement(Close, { fill: 'White' })
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
      { className: styles.Toggle },
      this.renderElements()
    )
  }
}
//# sourceMappingURL=Toggle.js.map
