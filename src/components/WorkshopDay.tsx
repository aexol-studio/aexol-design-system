import * as React from 'react'
// import * as classnames from 'classnames'
import { Colors } from './styles/Colors'

import * as styles from './styles/WorkshopDayStyles'

export interface IWorkshopDayProps {
  day: number
  list: string[]
  headerColor?: keyof typeof Colors
  style?: React.CSSProperties
}

export const WorkshopDay: React.FunctionComponent<
  IWorkshopDayProps
> = props => {
  const { day, list, style, headerColor = 'Floating Mandarines', ...restProps } = props

  return (
    <div
      className={styles.WorkshopDayContainer}
      style={style}
      {...restProps}
    >
      <div
        className={styles.WorkshopDayHeader}
        style={{ backgroundColor: Colors[headerColor]}}
      >
        Day {day}
      </div>
      <div className={styles.List}>
        {list.map((el, idx) => {
          return (
            <div key={idx} className={styles.ListEl}>
              {el}
            </div>
          )
        })}
      </div>
    </div>
  )
}
