import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/WhiteTileStyles'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import { Select } from './Select'
export class WhiteTile extends React.PureComponent {
  constructor(props) {
    super(props)
    this.inputTextNameHandler = val => {
      this.setState({
        error: '',
        textNameHandler: val
      })
    }
    this.inputTextEmailHandler = val => {
      this.setState({
        error: '',
        emailHandler: val
      })
    }
    this.checkboxHandler1 = val => {
      this.setState({
        checkboxHandler1: val
      })
    }
    this.checkboxHandler2 = val => {
      this.setState({
        checkboxHandler2: val
      })
    }
    this.selectHandler = val => {
      this.setState({
        SelectComumnsTxt: val
      })
    }
    this.isVisibleParagraph = val => {
      this.setState({
        isVisibleParagraph: val
      })
    }
    this.onClickHandler = () => {
      this.props.onSubmit({
        checkboxHandler1: this.state.checkboxHandler1,
        checkboxHandler2: this.state.checkboxHandler2,
        emailHandler: this.state.emailHandler,
        textNameHandler: this.state.textNameHandler,
        SelectedOption: this.state.SelectComumnsTxt
      })
    }
    this.state = {
      checkboxHandler1: false,
      checkboxHandler2: false,
      error: '',
      emailHandler: '',
      textNameHandler: '',
      SelectComumnsTxt: '',
      isVisibleParagraph: false
    }
  }
  render() {
    return React.createElement(
      'div',
      { className: classnames(styles.WhiteTileMain) },
      React.createElement(
        'div',
        { className: styles.WhiteTileContent },
        React.createElement(Input, {
          label: this.props.InputTextName.label,
          placeholder: this.props.InputTextName.placeholder,
          starLabel: this.props.InputTextName.starLabel,
          onChange: this.inputTextNameHandler,
          value: this.state.textNameHandler
        }),
        React.createElement(Input, {
          label: this.props.InputTextEmail.label,
          placeholder: this.props.InputTextEmail.placeholder,
          starLabel: this.props.InputTextEmail.starLabel,
          onChange: this.inputTextEmailHandler,
          value: this.state.emailHandler
        }),
        React.createElement(
          'div',
          { className: styles.WhiteTileSelectContent },
          React.createElement(Select, {
            style: {
              width: '100%'
            },
            options: this.props.SelectOptions.options,
            label: this.props.SelectOptions.label,
            placeholder: this.props.SelectOptions.placeholder,
            onChange: this.selectHandler,
            value: this.state.SelectComumnsTxt
          })
        ),
        React.createElement(
          'div',
          { className: styles.WhiteTileCheckboxElement },
          React.createElement(
            'div',
            { className: styles.WhiteTileCheckboxContent },
            React.createElement(Checkbox, {
              shape: this.props.CheckboxTextFirst.shape,
              checkboxParagraph: this.props.CheckboxTextFirst.paragraph,
              onChange: this.checkboxHandler1
            })
          ),
          React.createElement(
            'div',
            { className: styles.WhiteTileCheckboxContent },
            React.createElement(Checkbox, {
              shape: this.props.CheckboxTextSecond.shape,
              checkboxParagraph: this.props.CheckboxTextSecond.paragraph,
              onChange: this.checkboxHandler2
            })
          ),
          this.props.WhiteTileParagraph &&
            React.createElement(
              'div',
              { className: styles.WhiteTileContentParagraph },
              React.createElement(
                'p',
                { className: styles.WhiteTileCheckboxContentParagraph },
                this.props.WhiteTileParagraph
              )
            ),
          React.createElement(
            'div',
            { className: styles.WhiteTileCheckboxContentButton },
            React.createElement(
              Button,
              { onClick: this.onClickHandler },
              this.props.WhiteButtonText
            )
          )
        )
      )
    )
  }
}
//# sourceMappingURL=WhiteTile.js.map
