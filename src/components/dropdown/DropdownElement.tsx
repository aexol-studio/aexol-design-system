import * as React from 'react';
import * as styles from './styles/DropdownStyle';

export const DropdownElement: React.FunctionComponent = (props) => {

  return (
    <div className={styles.DropdownListElement}>
      {props.children}
    </div>
  )
};

export default DropdownElement;
