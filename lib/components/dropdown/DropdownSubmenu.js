import * as React from 'react'
import * as styles from './styles/DropdownStyle'
export const DropdownSubmenu = props => {
  return React.createElement(
    'div',
    { className: styles.DropdownSubmenuElement },
    props.title,
    React.createElement(
      'div',
      { className: styles.DropdownSubmenuList },
      props.children
    )
  )
}
export default DropdownSubmenu
//# sourceMappingURL=DropdownSubmenu.js.map
