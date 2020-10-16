import * as React from 'react'
declare type Corner =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'none'
export interface IWorkshopTileProps {
  day: number
  list: string[]
  corner?: Corner
  style?: React.CSSProperties
}
export declare const WorkshopTile: React.FunctionComponent<IWorkshopTileProps>
export {}
