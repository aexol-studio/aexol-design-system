import * as React from 'react'
import * as classnames from 'classnames';

import * as styles from './styles/WorkshopTileStyles'

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

export interface IWorkshopTextTileProps {
  text: string;
  corner?: Corner;
  style?: React.CSSProperties;
}

export const WorkshopTextTile: React.FunctionComponent<IWorkshopTextTileProps> = (props) => {
  const {
    text,
    corner = 'topLeft',
    style,
    ...restProps
  } = props

  return (
    <div
      className={classnames(
        styles.WorkshopTextTileContainer,
        corner
      )}
      {...restProps}
    >
      <div className={styles.TileText}>
        {text}
      </div>
    </div>
  )
}
