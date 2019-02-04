import * as React from 'react';
import * as styles from './styles/DropdownStyle';

export interface IDropdownSubmenuProps {
  title: string;
}

export const DropdownSubmenu: React.FunctionComponent<IDropdownSubmenuProps> = (props) => {

  return (
    <div className={styles.DropdownSubmenuElement}>
      {props.title}
      <div className={styles.DropdownSubmenuList}>
        {props.children}
      </div>
    </div>
  )
};

export default DropdownSubmenu;
