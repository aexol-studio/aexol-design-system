import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/SelectStyle'

export interface ISelectProps {
  options: Array<{
    label: string
    value: any
  }>
  placeholder?: string
  label?: string
  onChange: (val: any) => void
  value: any | undefined
  style?: React.CSSProperties
}

interface ISelectState {
  open: boolean
  inputMatch: string
}

export class Select extends React.PureComponent<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props)
    this.state = {
      open: false,
      inputMatch: ''
    }
  }

  addValue = (value: any) => {
    this.props.onChange(value)
  }

  render() {
    const { options } = this.props
    const { placeholder, label, style, value, onChange } = this.props

    const selectOptions = options.filter(o => o.value !== value)

    const selectObject = (
      <div className={styles.holderValue}>
        {value ? (
          <div
            className={classnames({
              [styles.showValue]: true,
              [styles.emptyValue]: false
            })}
          >
            <span className={styles.valueChoosen}>
              {options.find(o => o.value === value)
                ? options.filter(o => o.value === value)[0].label
                : 'Error - no value'}
            </span>
            <span
              className={styles.Delete}
              onClick={e => {
                e.stopPropagation()
                onChange(null)
              }}
            >
              ×
            </span>
          </div>
        ) : (
          <input
            id="placeholder"
            placeholder={placeholder}
            className={styles.placeholderValue}
            onChange={e => {
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
            }}
          />
        )}
      </div>
    )

    return (
      <div className={styles.Select} style={style}>
        <div className={styles.Label}>{label}</div>
        <div className={styles.holderSelect}>
          {selectObject}
          <div
            className={styles.ArrowContainer}
            onClick={() => {
              this.setState(prevState => ({
                open: !prevState.open
              }))
            }}
          >
            <span className={styles.SelectArrow} />
          </div>
        </div>
        <ul
          className={classnames({
            [styles.holderValues]: true,
            open: this.state.open
          })}
        >
          {this.state.inputMatch
            ? selectOptions
                .filter(o =>
                  o.label
                    .toLowerCase()
                    .match(this.state.inputMatch.toLowerCase())
                )
                .map(({ label, value }, index) => {
                  return (
                    <li
                      className={styles.Li}
                      onClick={() => {
                        this.addValue(value)
                        this.setState({
                          open: false
                        })
                      }}
                      key={index}
                    >
                      {label}
                    </li>
                  )
                })
            : selectOptions.map(({ label, value }, index) => {
                return (
                  <li
                    className={styles.Li}
                    onClick={() => {
                      this.addValue(value)
                      this.setState({
                        open: false
                      })
                    }}
                    key={index}
                  >
                    {label}
                  </li>
                )
              })}
        </ul>
      </div>
    )
  }
}
