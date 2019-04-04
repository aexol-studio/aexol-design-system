import * as React from 'react'
import * as styles from './styles/DropdownStyle'

export interface IDropdownButtonProps {
  title: string
}

export const DropdownButton: React.FunctionComponent<
  IDropdownButtonProps
> = props => {
  return (
    <div className={styles.DropdownButton}>
      {props.title}
      <div className={styles.DropdownList}>{props.children}</div>
    </div>
  )
}

export default DropdownButton
