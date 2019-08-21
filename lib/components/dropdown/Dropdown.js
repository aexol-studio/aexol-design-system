import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/DropdownStyle'
export class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleOnClick = child => {
      if (child) {
        this.setState({
          selected: child.props.title || child.props.children
        })
      }
    }
    this.renderElements = () => {
      const items = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          onClick: this.handleOnClick.bind(this, child),
          className: classnames({
            [styles.DropdownButton]: true,
            selected: child.props.title === this.state.selected
          })
        })
      })
      return React.createElement(React.Fragment, null, items)
    }
    this.state = {
      selected: ''
    }
  }
  render() {
    return React.createElement(
      'div',
      { className: styles.Dropdown },
      this.renderElements()
    )
  }
}
//# sourceMappingURL=Dropdown.js.map
