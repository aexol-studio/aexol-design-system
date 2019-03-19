import * as React from 'react'
import * as classnames from 'classnames';
import { PMedium } from './typography';
import * as styles from './styles/WorkshopTileStyles';
import { Colors } from './styles/Colors';

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
      style={style}
      {...restProps}
    >
      <PMedium style={{color: Colors['Black Hole']}}>
        {text}
      </PMedium>
    </div>
  )
}
