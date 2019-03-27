import * as React from 'react'
import * as classnames from 'classnames';
import * as styles from './styles/BlueTileStyles';
import {H1, P} from './typography';
import { Colors } from './styles/Colors';

export interface BlueTileComponentProps {
  BlueTileHeader: string;
  BlueTileHeaderParagraph: string;
  envelope: string

}

export const BlueTile: React.FunctionComponent<BlueTileComponentProps> = (props) => {
  const {
    BlueTileHeader,
    BlueTileHeaderParagraph,
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
      <div className={styles.TileLeftContent}>
      <p>Cokolwiek jakiś kod</p>
       </div>
      <div className={styles.TileRightContent}>
          {/* <div>{envelope}</div> */}
          <div className={styles.TileLeftHeader}>
          <H1 style={{color: Colors.White}}>{BlueTileHeader}</H1>
          </div>
          <div className={styles.TileLeftParagraph}>
          <P style={{color: Colors.White}}>{BlueTileHeaderParagraph}</P>
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}
