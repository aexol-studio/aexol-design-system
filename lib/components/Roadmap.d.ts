import * as React from 'react'
declare type Point = {
  title: string
  header: string
  text: string
  done: boolean
}
declare type Color = 'gradient' | 'blue'
export interface IRoadmapProps {
  points: Point[]
  mainColor?: Color
  style?: React.CSSProperties
}
export declare const Roadmap: React.FunctionComponent<IRoadmapProps>
export {}
