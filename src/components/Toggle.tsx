import * as React from 'react';
import * as classnames from 'classnames';
import { Close, Check } from './icons';
import * as styles from './styles/ToggleStyle';
import { Colors } from './styles/Colors';

type ToggleShape = 'round' | 'oval'

export interface IToggleProps {
  shape?: ToggleShape;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

interface IToggleState {
  value: boolean;
}

export class Toggle extends React.PureComponent<IToggleProps, IToggleState> {
  constructor(props: IToggleProps) {
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

    return(
      <React.Fragment>
        <div
          className={classnames(classnames({
            [styles.ToggleElement]: true,
            active: this.state.value,
            on: true
          }),
          classnames(
            this.props.shape
          ))}
          onClick={e => this.handleOnClick(true)}
        >
          <Check fill={Colors.White} />
        </div>
        <div
          className={classnames(classnames({
            [styles.ToggleElement]: true,
            active: !this.state.value,
            off: true
          }),
          classnames(
            this.props.shape
          ))}
          onClick={e => this.handleOnClick(false)}
        >
          <Close fill={Colors.White}/>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className={styles.Toggle}>
        {this.renderElements()}
      </div>
    )
  }
}
