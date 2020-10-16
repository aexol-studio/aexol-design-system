import * as React from 'react'
declare type Point = 'small' | 'big'
declare type Color = 'gradient' | 'blue'
declare type Position = 'bottom' | 'topRight' | 'top'
declare type PointPosition = 'bottom' | 'top'
export interface IRoadmapPointProps {
  idx: number
  point?: Point
  pointColor?: Color
  done: boolean
  title: string
  titlePosition?: Position
  pointPosition?: PointPosition
  header: string
  text: string
  style?: React.CSSProperties
}
export declare const RoadmapPoint: React.FunctionComponent<IRoadmapPointProps>
export {}
