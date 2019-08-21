import * as React from 'react'
import { Colors } from './styles/Colors'
export interface IWorkshopDayProps {
  day: number
  list: string[]
  headerColor?: keyof typeof Colors
  style?: React.CSSProperties
}
export declare const WorkshopDay: React.FunctionComponent<IWorkshopDayProps>
