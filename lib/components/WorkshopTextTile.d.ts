import * as React from 'react'
declare type Corner =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'none'
export interface IWorkshopTextTileProps {
  text: string
  corner?: Corner
  style?: React.CSSProperties
}
export declare const WorkshopTextTile: React.FunctionComponent<
  IWorkshopTextTileProps
>
export {}
