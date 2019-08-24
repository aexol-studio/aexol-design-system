import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/WhiteTileStyles'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
import { Select } from './Select'
type SelectOptions = {
  options: Array<{
    value: number
    label: string
  }>
  placeholder: string
  label: string
}

type InputTextName = {
  label: string
  placeholder: string
  type: string
  starLabel: boolean
}

type InputTextEmail = {
  label: string
  placeholder: string
  type: string
  starLabel: boolean
}

type CheckboxText = {
  shape: 'round' | 'square'
  paragraph?: string | JSX.Element
}

type ReturnedWhiteTileValue = {
  checkboxHandler1: boolean
  checkboxHandler2: boolean
  emailHandler: string
  textNameHandler: string
  SelectedOption: number
}

interface IGetInputTextProps {
  id?: string
  SelectOptions: SelectOptions
  InputTextName: InputTextName
  InputTextEmail: InputTextEmail
  CheckboxTextFirst: CheckboxText
  CheckboxTextSecond: CheckboxText
  WhiteTileParagraph?: string
  WhiteButtonText: string
  onSubmit: (value: ReturnedWhiteTileValue) => void
}

interface IGetInputTextState {
  error: string
  emailHandler: string
  textNameHandler: string
  checkboxHandler1: boolean
  checkboxHandler2: boolean
  SelectComumnsTxt: any
  isVisibleParagraph?: boolean
}

export class WhiteTile extends React.PureComponent<
  IGetInputTextProps,
  IGetInputTextState
> {
  constructor(props: any) {
    super(props)
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
  inputTextNameHandler = (val: string) => {
    this.setState({
      error: '',
      textNameHandler: val
    })
  }

  inputTextEmailHandler = (val: string) => {
    this.setState({
      error: '',
      emailHandler: val
    })
  }
  checkboxHandler1 = (val: any) => {
    this.setState({
      checkboxHandler1: val
    })
  }
  checkboxHandler2 = (val: any) => {
    this.setState({
      checkboxHandler2: val
    })
  }
  selectHandler = (val: any) => {
    this.setState({
      SelectComumnsTxt: val
    })
  }

  isVisibleParagraph = (val: any) => {
    this.setState({
      isVisibleParagraph: val
    })
  }

  onClickHandler = () => {
    this.props.onSubmit({
      checkboxHandler1: this.state.checkboxHandler1,
      checkboxHandler2: this.state.checkboxHandler2,
      emailHandler: this.state.emailHandler,
      textNameHandler: this.state.textNameHandler,
      SelectedOption: this.state.SelectComumnsTxt
    })
  }

  render() {
    return (
      <div className={classnames(styles.WhiteTileMain)}>
        <div className={styles.WhiteTileContent}>
          <Input
            label={this.props.InputTextName.label}
            placeholder={this.props.InputTextName.placeholder}
            starLabel={this.props.InputTextName.starLabel}
            onChange={this.inputTextNameHandler}
          />
          <Input
            label={this.props.InputTextEmail.label}
            placeholder={this.props.InputTextEmail.placeholder}
            starLabel={this.props.InputTextEmail.starLabel}
            onChange={this.inputTextEmailHandler}
          />
          <div className={styles.WhiteTileSelectContent}>
            <Select
              style={{
                width: '100%'
              }}
              options={this.props.SelectOptions.options}
              label={this.props.SelectOptions.label}
              placeholder={this.props.SelectOptions.placeholder}
              onChange={this.selectHandler}
              value={this.state.SelectComumnsTxt}
            />
          </div>
          <div className={styles.WhiteTileCheckboxElement}>
            <div className={styles.WhiteTileCheckboxContent}>
              <Checkbox
                shape={this.props.CheckboxTextFirst.shape}
                checkboxParagraph={this.props.CheckboxTextFirst.paragraph}
                onChange={this.checkboxHandler1}
              />
            </div>
            <div className={styles.WhiteTileCheckboxContent}>
              <Checkbox
                shape={this.props.CheckboxTextSecond.shape}
                checkboxParagraph={this.props.CheckboxTextSecond.paragraph}
                onChange={this.checkboxHandler2}
              />
            </div>
            {this.props.WhiteTileParagraph && (
              <div className={styles.WhiteTileContentParagraph}>
                <p className={styles.WhiteTileCheckboxContentParagraph}>
                  {this.props.WhiteTileParagraph}
                </p>
              </div>
            )}
            <div className={styles.WhiteTileCheckboxContentButton}>
              <Button onClick={this.onClickHandler}>
                {this.props.WhiteButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
