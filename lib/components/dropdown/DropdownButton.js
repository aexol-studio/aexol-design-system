import * as React from 'react'
import * as styles from './styles/DropdownStyle'
export const DropdownButton = props => {
  return React.createElement(
    'div',
    { className: styles.DropdownButton },
    props.title,
    React.createElement(
      'div',
      { className: styles.DropdownList },
      props.children
    )
  )
}
export default DropdownButton
//# sourceMappingURL=DropdownButton.js.map
