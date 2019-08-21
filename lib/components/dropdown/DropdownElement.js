import * as React from 'react'
import * as styles from './styles/DropdownStyle'
export const DropdownElement = props => {
  return React.createElement(
    'div',
    { className: styles.DropdownListElement },
    props.children
  )
}
export default DropdownElement
//# sourceMappingURL=DropdownElement.js.map
