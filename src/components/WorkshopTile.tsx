import * as React from 'react'
import * as classnames from 'classnames';

import * as styles from './styles/WorkshopTileStyles'

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

export interface IWorkshopTileProps {
  day: number;
  list: string[];
  corner?: Corner;
  style?: React.CSSProperties;
}

export const WorkshopTile: React.FunctionComponent<IWorkshopTileProps> = (props) => {
  const {
    day,
    list,
    corner = 'none',
    style,
    ...restProps
  } = props

  const checkDay = () => {
    switch (props.day) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      default:
        return 'rd'
    }
  }

  return (
    <div
      className={classnames(
        styles.WorkshopTileContainer,
        corner
      )}
      style={style}
      {...restProps}
    >
      <div
        className={classnames(
          styles.SideBar,
          corner
        )}
      >
        <div className={styles.SideBarText}>
          {day}<span className={styles.DayEnding}>{checkDay()}</span>
          <div className={styles.Day}>day</div>
        </div>
      </div>
      <div
        className={classnames(
          styles.List,
          corner
        )}
      >
        {list.map((el, idx) => {
          return(
            <div key={idx} className={styles.ListEl}>{el}</div>
          )
        })}
      </div>
    </div>
  )
}
