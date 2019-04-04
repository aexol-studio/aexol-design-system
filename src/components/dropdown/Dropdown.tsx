import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/DropdownStyle'

export interface IDropdownProps {
  // onClick?: (item: string) => void;
}

interface DropdownState {
  selected: string
}

export class Dropdown extends React.PureComponent<
  IDropdownProps,
  DropdownState
> {
  constructor(props: IDropdownProps) {
    super(props)
    this.state = {
      selected: ''
    }
  }

  handleOnClick = (child: React.ReactElement<any>) => {
    if (child) {
      this.setState({
        selected: child.props.title || child.props.children
      })
      // if (this.props.onClick) {
      //   this.props.onClick(child.props.title || child.props.children)
      // }
    }
  }

  // TODO fix typings
  renderElements = () => {
    const items = React.Children.map(this.props.children, (child: any) => {
      return React.cloneElement(child, {
        onClick: this.handleOnClick.bind(this, child),
        className: classnames({
          [styles.DropdownButton]: true,
          selected: child.props.title === this.state.selected
        })
      })
    })

    return <React.Fragment>{items}</React.Fragment>
  }

  render() {
    return <div className={styles.Dropdown}>{this.renderElements()}</div>
  }
}
