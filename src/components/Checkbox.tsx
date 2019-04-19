import * as React from 'react'
import * as classnames from 'classnames'
import { CheckBox } from './icons'
import * as styles from './styles/CheckboxStyles'

type CheckboxShape = 'round' | 'square'

export interface ICheckBoxProps {
  shape?: CheckboxShape
  value?: boolean
  checkboxParagraph?: string
  onChange?: (value: boolean) => void
}

interface ICheckboxState {
  value: boolean
}

export class Checkbox extends React.PureComponent<
  ICheckBoxProps,
  ICheckboxState
> {
  constructor(props: ICheckBoxProps) {
    super(props)
    this.state = {
      value: props.value || false
    }
  }
  handleOnClick = (value: boolean) => {
    if (this.state.value !== value) {
      this.setState({
        value: value
      })
      if (this.props.onChange) {
        this.props.onChange(value)
      }
    }
  }
  renderElements = () => {
    return (
      <React.Fragment>
        <div
          className={classnames(
            classnames({
              [styles.CheckboxElement]: true,
              active: this.state.value,
              on: true
            }),
            classnames(this.props.shape)
          )}
          onClick={e => this.handleOnClick(!this.state.value)}
        >
          <CheckBox fill={'Super Nova'} />
        </div>
        <p className={styles.CheckboxParagraph}>
          {this.props.checkboxParagraph}
        </p>
      </React.Fragment>
    )
  }
  render() {
    return <div className={styles.Checkbox}>{this.renderElements()}</div>
  }
}
