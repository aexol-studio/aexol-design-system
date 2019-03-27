import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/SelectStyle';

export interface ISelectProps {
  options: Array<{
    label: string;
    value: any;
  }>;
  placeholder?: string;
  label?: string;
  onChange?: (val: any) => void;
  style?: React.CSSProperties;
}

interface ISelectState {
  open: boolean;
  inputMatch: any;
  fieldVal: any;
}

export class Select extends React.PureComponent<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props)
    this.state = {
      open: false,
      inputMatch: null,
      fieldVal: null
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.documentClickHandler, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler, true);
  }

  documentClickHandler = () => {
    this.setState({
      open: false
    });
  };

  addValue = (value: any) => {
    this.setState({
      fieldVal: value
    });
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  };

  render() {
    let {
      options
    } = this.props
    const {
      placeholder,
      label,
      style
    } = this.props;

    options = options.map((o) => ({ ...o, label: `${o.label}` }));
    let selectOptions = [...options];
    selectOptions = selectOptions.filter((o) => o.value !== this.state.fieldVal);
    const selectObject = (
      <div className={styles.holderValue}>
        {this.state.fieldVal
          ? (
              <div
                className={classnames({
                  [styles.showValue]: true,
                  [styles.emptyValue]: false
                })}
              >
                <span className={styles.valueChoosen}>
                  {options.find((o) => o.value === this.state.fieldVal)
                    ? options.find((o) => o.value === this.state.fieldVal).label
                    : 'Error - no value'}
                </span>
                <span
                  className={styles.Delete}
                  onClick={(e) => {
                    e.stopPropagation();
                    const newValue = null;
                    this.setState({
                      fieldVal: newValue
                    })
                  }}
                >
                  ×
                </span>
              </div>
          )
          : (
          <input
            id="placeholder"
            placeholder={placeholder}
            className={styles.placeholderValue}
            onChange={(e) =>
              this.setState({
                inputMatch: e.target.value
              })}
          />
        )}
      </div>
    );

    return (
      <div
        className={styles.Select}
        style={style}
      >
        <div className={styles.Label}>{label}</div>
        <div
          onClick={() => {
            this.setState({
              open: !this.state.open
            });
          }}
          className={classnames({
            [styles.holderSelect]: true,
            [styles.Change]: this.state.open
          })}
        >
          {selectObject}
          <span
            className={classnames({
              [styles.SelectArrow]: true,
              [styles.Change]: this.state.open
            })}
          />
        </div>
        <ul
          className={classnames({
            [styles.holderValues]: true,
            [styles.open]: this.state.open
          })}
        >
          {this.state.inputMatch
          ? selectOptions.filter(o => o.label.toLowerCase().match(this.state.inputMatch.toLowerCase())).map(({ label, value }, index) => {
            return (
              <li
                onClick={() => {
                  this.addValue(value);
                }}
                key={index}
              >
                {label}
              </li>
            );
          })
          : selectOptions.map(({ label, value }, index) => {
            return (
              <li
                onClick={() => {
                  this.addValue(value);
                }}
                key={index}
              >
                {label}
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}
