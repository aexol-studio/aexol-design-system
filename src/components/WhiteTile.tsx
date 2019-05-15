import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/WhiteTileStyles'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'
// import value from '*.json';
import { Select } from './Select'
type SelectComumnsTxt = {
  options: Array<{
    value: number
    label: string
  }>
  placeholder: string
  label: string
}

type InputTextName = {
  labelName: string
  placeholderName?: string
  type?: string
  starLabel?: boolean
}

type InputTextEmail = {
  labelEmail: string
  placeholderEmail?: string
  type?: string
  starLabel?: boolean
}

type CheckboxTextFirst = {
  shapeFirst: 'round' | 'square'
  checkboxParagraphFirst?: string | JSX.Element
}

type CheckboxTextSecond = {
  shapeSecond: 'round' | 'square'
  checkboxParagraphSecond?: string | JSX.Element
}

// interface WhiteTileButton {
//   href?: string,
//   target?: string
// }

type myObj = {
  checkboxHandler1: any
  checkboxHandler2: any
  emailHandler: any
  textNameHandler: any
  SelectComumnsTxt: any
}

interface IGetInputTextProps {
  id?: string
  SelectComumnsTxt: SelectComumnsTxt
  InputTextName: InputTextName
  InputTextEmail: InputTextEmail
  CheckboxTextFirst: CheckboxTextFirst
  CheckboxTextSecond: CheckboxTextSecond
  WhiteTileParagraph: string
  WhiteButtonHref: string
  WhiteButtonText: string

  onSubmit: (value: myObj) => void
}

interface IGetInputTextState {
  error: string
  emailHandler: string
  textNameHandler: string
  checkboxHandler1: boolean | undefined
  checkboxHandler2: boolean | undefined
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
      isVisibleParagraph: true
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

  onClickHandler = (val: any) => {
    this.props.onSubmit({
      checkboxHandler1: this.state.checkboxHandler1,
      checkboxHandler2: this.state.checkboxHandler2,
      emailHandler: this.state.emailHandler,
      textNameHandler: this.state.textNameHandler,
      SelectComumnsTxt: this.state.SelectComumnsTxt
    })
  }

  // export interface WhiteTileProps {
  //   SelectComumnsTxt: SelectComumnsTxt
  //   InputTextName: InputTextName
  //   InputTextEmail: InputTextEmail
  //   CheckboxTextFirst: CheckboxTextFirst
  //   CheckboxTextSecond: CheckboxTextSecond
  //   WhiteTileParagraph: string
  //   WhiteButtonText: string
  //   WhiteButtonHref: string
  //   // WhiteTileButton: WhiteTileButton
  //   isVisibleTxt: boolean
  //   onChange?: (value: string) => void
  // }

  // export const WhiteTile: React.FunctionComponent<WhiteTileProps> = props => {
  //   const {
  //     SelectComumnsTxt,
  //     InputTextName,
  //     InputTextEmail,
  //     CheckboxTextFirst,
  //     CheckboxTextSecond,
  //     WhiteTileParagraph,
  //     WhiteButtonText,
  //     // WhiteTileButton,
  //     WhiteButtonHref,
  //     isVisibleTxt,
  //     // onChange
  //   } = props

  render() {
    // console.log(this.state)
    return (
      <div className={classnames(styles.WhiteTileMain)}>
        <div className={styles.WhiteTileContent}>
          <Input
            label="First name"
            placeholder="Enter your first name"
            starLabel={true}
            onChange={this.inputTextNameHandler}
          />
          <Input
            label="Email"
            placeholder="Enter your e-mail adress"
            starLabel={true}
            onChange={this.inputTextEmailHandler}
          />
          <div className={styles.WhiteTileSelectContent}>
            <Select
              style={{
                width: '100%'
              }}
              options={this.props.SelectComumnsTxt.options}
              label={this.props.SelectComumnsTxt.label}
              placeholder={this.props.SelectComumnsTxt.placeholder}
              onChange={this.selectHandler}
            />
          </div>
          <div className={styles.WhiteTileCheckboxElement}>
            <div className={styles.WhiteTileCheckboxContent}>
              <Checkbox
                shape="round"
                checkboxParagraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                onChange={this.checkboxHandler1}
              />
            </div>
            <div className={styles.WhiteTileCheckboxContent}>
              <Checkbox
                shape="round"
                checkboxParagraph="Aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                onChange={this.checkboxHandler2}
              />
            </div>

            {this.state.isVisibleParagraph && (
              <div className={styles.WhiteTileContentParagraph}>
                <p className={styles.WhiteTileCheckboxContentParagraph}>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt
                </p>
              </div>
            )}
            <div className={styles.WhiteTileCheckboxContentButton}>
              <Button onClick={this.onClickHandler}>Send Request</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
