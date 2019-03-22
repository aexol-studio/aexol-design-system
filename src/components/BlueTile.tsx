import * as React from 'react'
import * as classnames from 'classnames';
import * as styles from './styles/BlueTileStyles';

export interface BlueTileComponentProps {
  BlueTileHeader: string;
  BlueTileHeaderTxt: string;
  envelope: string

}

export const BlueTile: React.FunctionComponent<BlueTileComponentProps> = (props) => {
  const {
    BlueTileHeader,
    BlueTileHeaderTxt,
    envelope,
    ...restProps
  } = props

  return (
    <div
      className={classnames(
      styles.BlueTileMain)}
    >
      <div
        className={
          styles.BlueTileContainer
        }
        {...restProps}
      >
      <div className={styles.TileContent}>
      <div className={styles.TileleftContent}>
      <p>Cokolwiek jakiś kod</p>
       </div>
      <div className={styles.TileRightContent}>
          <div>{envelope}</div>
          <div>{BlueTileHeader}</div>
          <div>{BlueTileHeaderTxt}</div>
          </div>
      </div>
      </div>
    </div>
  )
}
