import * as React from 'react';
import { ArrowDown1, ArrowDown2, ArrowDown3 } from './icons';
import * as styles from './styles/ArrowsStyles';

export const ArrowsDown: React.FunctionComponent = () => {

  return (
    <div
      className={styles.ArrowsDownContainer}
    >
      <ArrowDown1 />
      <ArrowDown2 />
      <ArrowDown3 />
    </div>
  )
}
