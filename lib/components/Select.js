import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/SelectStyle'
export class Select extends React.PureComponent {
  constructor(props) {
    super(props)
    this.addValue = value => {
      this.props.onChange(value)
    }
    this.state = {
      open: false,
      inputMatch: ''
    }
  }
  render() {
    const { options } = this.props
    const { placeholder, label, style, value, onChange } = this.props
    const selectOptions = options.filter(o => o.value !== value)
    const selectObject = React.createElement(
      'div',
      { className: styles.holderValue },
      value
        ? React.createElement(
            'div',
            {
              className: classnames({
                [styles.showValue]: true,
                [styles.emptyValue]: false
              })
            },
            React.createElement(
              'span',
              { className: styles.valueChoosen },
              options.find(o => o.value === value)
                ? options.filter(o => o.value === value)[0].label
                : 'Error - no value'
            ),
            React.createElement(
              'span',
              {
                className: styles.Delete,
                onClick: e => {
                  e.stopPropagation()
                  onChange(null)
                }
              },
              '\u00D7'
            )
          )
        : React.createElement('input', {
            id: 'placeholder',
            placeholder: placeholder,
            className: styles.placeholderValue,
            onChange: e => {
              if (e.target.value.length > 0) {
                this.setState({
                  inputMatch: e.target.value,
                  open: true
                })
              } else {
                this.setState({
                  open: false
                })
              }
            }
          })
    )
    return React.createElement(
      'div',
      { className: styles.Select, style: style },
      React.createElement('div', { className: styles.Label }, label),
      React.createElement(
        'div',
        { className: styles.holderSelect },
        selectObject,
        React.createElement(
          'div',
          {
            className: styles.ArrowContainer,
            onClick: () => {
              this.setState(prevState => ({
                open: !prevState.open
              }))
            }
          },
          React.createElement('span', { className: styles.SelectArrow })
        )
      ),
      React.createElement(
        'ul',
        {
          className: classnames({
            [styles.holderValues]: true,
            open: this.state.open
          })
        },
        this.state.inputMatch
          ? selectOptions
              .filter(o =>
                o.label.toLowerCase().match(this.state.inputMatch.toLowerCase())
              )
              .map(({ label, value }, index) => {
                return React.createElement(
                  'li',
                  {
                    className: styles.Li,
                    onClick: () => {
                      this.addValue(value)
                      this.setState({
                        open: false
                      })
                    },
                    key: index
                  },
                  label
                )
              })
          : selectOptions.map(({ label, value }, index) => {
              return React.createElement(
                'li',
                {
                  className: styles.Li,
                  onClick: () => {
                    this.addValue(value)
                    this.setState({
                      open: false
                    })
                  },
                  key: index
                },
                label
              )
            })
      )
    )
  }
}
//# sourceMappingURL=Select.js.map
